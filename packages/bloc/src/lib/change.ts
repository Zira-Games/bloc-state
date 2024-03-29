/**
 * Represents a change between two states of a given type.
 *
 * @template State - The type of the states being changed.
 */
export class Change<State> {
  /**
   * Creates a new instance of the Change class.
   *
   * @param current - The current state.
   * @param nextState - The next state.
   */
  constructor(public current: State, public nextState: State) {}
}
