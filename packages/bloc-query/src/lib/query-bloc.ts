import { Bloc } from '@jacobtipp/bloc';
import {
  Observable,
  OperatorFunction,
  distinctUntilChanged,
  filter,
  map,
  startWith,
} from 'rxjs';
import {
  QueryFetchEvent,
  QueryEvent,
  QuerySubscriptionEvent,
  QueryRevalidateEvent,
  QuerySetQueryDataEvent,
  QueryErrorEvent,
} from './query-event';
import { FetchOptions, queryFetchTransformer } from './query-fetch-transformer';
import { QueryState, Ready } from './query-state';

export type QueryKey = string;

type QueryOptions = {
  staleTime?: number;
};

export type QueryFnOptions = {
  signal: AbortSignal;
};

export type GetQueryOptions<Data = unknown, Selected = QueryState<Data>> = {
  initialData?: Data;
  name?: string;
  selector?: (state: Ready<Data>) => Selected;
  comparator?: (previous: Selected, current: Selected) => boolean;
  queryKey: QueryKey;
  queryFn: (options: QueryFnOptions) => Promise<Data>;
} & QueryOptions &
  FetchOptions;

export class QueryBloc<
  Data = unknown,
  Selected = QueryState<Data>
> extends Bloc<QueryEvent, QueryState<Data>> {
  private staleTime: number;
  private handledInitialLoad = false;

  constructor(
    state: QueryState<Data>,
    options: GetQueryOptions<Data, Selected>
  ) {
    super(state, options.name ?? options.queryKey);
    this.staleTime = options.staleTime ?? 0;

    this.on(QuerySubscriptionEvent, (_event, _emit) => {
      if (this.state.status === 'isLoading' && !this.handledInitialLoad) {
        this.handledInitialLoad = true;
        this.add(new QueryFetchEvent(new AbortController()));
      }

      if (this.state.isReady && this.isStale) {
        this.add(new QueryRevalidateEvent());
      }
    });

    this.on(QueryRevalidateEvent, (_event, emit) => {
      emit({
        status: 'isFetching',
        lastUpdatedAt: this.state.lastUpdatedAt,
        isInitial: false,
        isLoading: false,
        isFetching: true,
        isReady: false,
        isError: false,
        data: this.state.data,
      });

      this.add(new QueryFetchEvent(new AbortController()));
    });

    this.on(QuerySetQueryDataEvent, (event, emit) => {
      let newData: Data;
      const setEvent = event as QuerySetQueryDataEvent<Data>;
      const set = setEvent.set;
      if (typeof set === 'function') {
        if (this.state.data === undefined) {
          throw new SetQueryDataException(
            'SetQueryData: cannot be set with a callback function if previous data is undefined, invoke setQueryData with data directly ' +
              'or provide initial data for the query'
          );
        }
        newData = (set as (old: Data) => Data)(this.state.data);
      } else {
        newData = set;
      }

      emit({
        status: 'isReady',
        isInitial: false,
        lastUpdatedAt: Date.now(),
        isLoading: false,
        isFetching: false,
        isReady: true,
        isError: false,
        data: newData,
      });
    });

    this.on(QueryErrorEvent, (event, emit) => {
      emit({
        status: 'isError',
        lastUpdatedAt: this.state.lastUpdatedAt,
        isInitial: false,
        isLoading: false,
        isFetching: false,
        isReady: false,
        isError: true,
        data: this.state.data,
        error: event.error,
      });
    });

    this.on(
      QueryFetchEvent,
      async (event, emit) => {
        if (event.cancel) return;
        const data = await options.queryFn({
          signal: event.abortController.signal,
        });
        emit({
          status: 'isReady',
          lastUpdatedAt: Date.now(),
          isInitial: false,
          isLoading: false,
          isFetching: false,
          isReady: true,
          isError: false,
          data: data,
        });
      },
      queryFetchTransformer<Data>(
        {
          maxRetryAttempts: options.maxRetryAttempts,
          retryDuration: options.retryDuration,
          scalingDuration: options.scalingDuration,
          retryWhen: options.retryWhen,
        },
        this
      )
    );
  }

  get isStale() {
    const now = Date.now();
    return this.state.lastUpdatedAt + this.staleTime <= now;
  }

  getQuery = <Selected = QueryState<Data>>(
    selector?: (state: Ready<Data>) => Selected,
    comparer?: (previous: Selected, current: Selected) => boolean
  ): Observable<Selected> => {
    if (this.isClosed) {
      throw new QueryClosedException('Query is closed');
    }

    this.add(new QuerySubscriptionEvent());

    return this.state$.pipe(
      startWith(this.state),
      filter((state) => (selector ? state.status === 'isReady' : true)),
      map((state) =>
        selector ? selector(state as Ready<Data>) : state
      ) as OperatorFunction<QueryState<Data>, Selected>,
      distinctUntilChanged(comparer)
    );
  };

  setQueryData = (set: ((old: Data) => Data) | Data) => {
    this.add(new QuerySetQueryDataEvent(set));
  };

  cancelQuery = () => {
    this.add(new QueryFetchEvent(new AbortController(), true));
  };

  revalidateQuery = () => {
    this.add(new QueryRevalidateEvent());
  };
}

export class SetQueryDataException extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, SetQueryDataException.prototype);
  }
}

export class QueryClosedException extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, QueryClosedException.prototype);
  }
}
