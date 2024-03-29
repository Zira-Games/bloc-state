import { Observable } from 'rxjs';
import { Todo } from './model/todo';

export abstract class TodosClient {
  protected _!: void;
  abstract getTodos(): Observable<Todo[]>;
  abstract saveTodo(todo: Todo): Promise<void>;
  abstract deleteTodo(id: string): Promise<void>;
  abstract getTodo(id: string): Promise<Todo>;
  abstract completeAll(isCompleted: boolean): Promise<number>;
  abstract clearCompleted(): Promise<number>;
}
