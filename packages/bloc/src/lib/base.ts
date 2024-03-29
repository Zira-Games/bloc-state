import { Observable, Subscription, Subject, Observer } from 'rxjs';
import { Change } from './change';
import { BlocObserver } from './bloc-observer';

export type NextFunction<State> = (value: State) => void;

/**
 * Base class for implementing BLoC pattern.
 *
 * @typeParam State - The type of the state maintained by the BLoC.
 */
export abstract class BlocBase<State = unknown> {
  /**
   * Initializes a new instance of the `BlocBase` class.
   *
   * @param state - The initial state of the BLoC.
   */
  constructor(state: State, name?: string) {
    this._state = state;
    this._stateSubject$ = new Subject();
    this.state$ = this._stateSubject$.asObservable();

    // Gets the name of the constructor function for this BLoC instance.
    this.name = name ?? this.constructor.name;

    this.subscriptions.add(this.state$.subscribe());

    // Executes the BlocObserver's `onCreate` method specific to this BLoC.
    BlocObserver.observer.onCreate(this, this._state);
  }

  /**
   * The name of the BLoC instance.
   */
  readonly name: string;

  /**
   * A read-only observable stream of the state maintained by the BLoC.
   */
  readonly state$: Observable<State>;

  /** A set of stream subscriptions that a bloc has subscribed to. */
  protected readonly subscriptions = new Set<Subscription>();

  /**
   * Whether or not the BLoC instance has been closed.
   */
  protected _isClosed = false;

  /**
   * Whether or not the current state has been emitted.
   */
  protected _emitted = false;

  /**
   * The current state of the BLoC.
   */
  private _state: State;

  /**
   * The subject that publishes changes in the state of the BLoC.
   */
  private readonly _stateSubject$: Subject<State>;

  /**
   * Returns the current state of the BLoC.
   *
   * @returns The current state of the BLoC.
   */
  get state(): State {
    return this._state;
  }

  /**
   * Returns whether or not the BLoC instance has been closed.
   *
   * @returns Whether or not the BLoC instance has been closed.
   */
  get isClosed() {
    return this._isClosed;
  }

  /**
   * Executes when the BLoC encounters an error.
   *
   * @param error - The error encountered by the BLoC.
   */
  protected onError(error: Error): void {
    BlocObserver.observer.onError(this, error);
  }

  /**
   * Executes when the state of the BLoC changes.
   *
   * @param change - Information about the change in state of the BLoC.
   */
  protected onChange(change: Change<State>): void {
    BlocObserver.observer.onChange(this, change);
  }

  /**
   * Executes when the BLoC instance is closed.
   */
  protected onClose() {
    BlocObserver.observer.onClose(this);
  }

  /**
   * Reports an error which triggers onError
   *
   * @param error - An error that has been thrown within a Bloc's execution
   */
  protected addError(error: Error) {
    this.onError(error);
  }

  /**
   * Listens to an observable and manages the subscription internally.
   *
   * @template T - The type emitted by the Observable.
   * @param {Observable<T>} observable - The Observable to listen to.
   * @param {Partial<Observer<T>> | NextFunction<T>} observerOrNext - Either an observer object or a callback function for next events.
   * @returns {{ unsubscribe: () => void; isClosed: boolean }} An object with an `unsubscribe` method to detach the subscription
   * and an `isClosed` property indicating whether the subscription is closed.
   */
  protected listenTo<T>(
    observable: Observable<T>,
    observerOrNext: Partial<Observer<T>> | NextFunction<T>
  ): { unsubscribe: () => void; isClosed: boolean } {
    let observer: Partial<Observer<T>>;

    if (typeof observerOrNext === 'function') {
      observer = { next: observerOrNext };
    } else {
      observer = observerOrNext;
    }

    const boundObserver: Observer<T> = {
      next: (newState) => {
        observer.next?.call(this, newState);
      },
      error: (error) => {
        observer.error?.call(this, error);
      },
      complete: () => {
        observer.complete?.call(this);
      },
    };

    const subscription = observable.subscribe(boundObserver);

    this.subscriptions.add(subscription);

    return {
      unsubscribe: () => {
        subscription.unsubscribe();
        this.subscriptions.delete(subscription);
      },
      get isClosed(): boolean {
        return subscription.closed;
      },
    };
  }

  /**
   * Emits new BLoC state, this should only be used internally by other libraries or for testing.
   */
  __unsafeEmit__(newState: State): void {
    return this.emit(newState);
  }

  /**
   * Emits a new state for the BLoC.
   *
   * @param newState - The new state of the BLoC.
   */
  protected emit(newState: State): void {
    try {
      if (this._isClosed) {
        console.warn('Cannot emit new states after calling close');
      }

      if (newState == this._state && this._emitted) return;

      const previous = this.state;

      // Sets the new state and notifies observers.
      this._state = newState;
      // Notifies observers of the change in state.
      this.onChange(new Change(previous, newState));
      this._stateSubject$.next(newState);

      // Marks the current state as emitted.
      this._emitted = true;
    } catch (error) {
      // Executes when the BLoC encounters an error.
      this.onError(error as Error);
      throw error;
    }
  }

  fromJson(json: string): State {
    return JSON.parse(json) as State;
  }

  toJson(state: State): string {
    return JSON.stringify(state);
  }

  /**
   * Closes the BLoC instance.
   */
  close() {
    this._isClosed = true;
    this._stateSubject$.complete();
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions.clear();

    // Executes when the BLoC instance is closed.
    this.onClose();
  }
}
