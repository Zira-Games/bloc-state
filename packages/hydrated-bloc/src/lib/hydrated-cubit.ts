import { Change, ClassType, Cubit, StateType } from '@jacobtipp/bloc';
import { HydratedMixin, HydratedStorage, StorageNotFound } from '.';

export const WithHydratedCubit = <
  BaseCubit extends ClassType<Cubit<any>>,
  State = StateType<InstanceType<BaseCubit>>
>(
  Base: BaseCubit
): BaseCubit & ClassType<HydratedMixin<State>> => {
  return class HydrateMixin extends Base {
    constructor(...args: any[]) {
      super(...args);
      this.clear = this.clear.bind(this);
      this.fromJson = this.fromJson.bind(this);
      this.toJson = this.toJson.bind(this);
      this.hydrate = this.hydrate.bind(this);
    }

    get id() {
      return '';
    }

    get storagePrefix() {
      return this.name;
    }

    get storageToken() {
      return `${this.storagePrefix}-${this.id}`;
    }

    async clear() {
      await HydratedStorage.storage.delete(this.storageToken);
    }

    private _cachedState: State | null = null;

    override get state(): State {
      const storage = HydratedStorage.storage;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (this._cachedState !== null) return this._cachedState!;
      try {
        const stateJson = storage.read(this.storageToken);
        if (stateJson === null) {
          this._cachedState = super.state;
          return super.state;
        }
        const cachedState = this.fromJson(stateJson);
        this._cachedState = cachedState;
        return cachedState;
      } catch (error: any) {
        if (error instanceof Error) this.onError(error);
        this._cachedState = super.state;
        return super.state;
      }
    }

    protected override onChange(change: Change<State>): void {
      super.onChange(change);
      const storage = HydratedStorage.storage;
      const state = change.nextState;
      try {
        const stateJson = this.toJson(state);
        if (stateJson !== null) storage.write(this.storageToken, stateJson);
      } catch (error: any) {
        if (error instanceof Error) {
          this.onError(error);
          throw error;
        }
      }

      this._cachedState = state;
    }

    hydrate() {
      try {
        const storage = HydratedStorage.storage;
        const stateJson = this.toJson(this.state);
        if (stateJson != null) {
          storage.write(this.storageToken, stateJson);
        }
      } catch (error: any) {
        if (error instanceof Error) this.onError(error);
        if (error instanceof StorageNotFound) throw error;
      }
    }
  };
};
