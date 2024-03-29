import produce, { Draft, immerable } from 'immer';

/**
 * Abstract class that represents the base state for a BLoC.
 */
export abstract class BaseState {
  /**
   * Property that makes the object compatible with Immer.
   */
  [immerable] = true;

  /**
   * The name of the state, which is the same as the name of the
   * constructor function.
   */
  name = this.constructor.name;

  /**
   * Returns a new instance of the state object by applying the specified
   * mutations to it.
   * @param draft A callback function that allows modifying the draft state.
   *              Must return void.
   * @returns A new instance of the state object with the applied mutations.
   */
  copyWith(draft: (state: Draft<this>) => void): this {
    return produce(this, draft);
  }
}
