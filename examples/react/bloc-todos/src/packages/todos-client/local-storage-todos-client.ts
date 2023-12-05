import { TodosClient } from './todos-client';
import { Todo } from './model/todo';

export class LocalStorageTodosClient implements TodosClient {
  constructor() {}

  getTodo = async (id: string) => {
    const todos = await this.getTodos();

    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
      throw new TodoNotFoundException();
    }

    return todo;
  };

  getTodos = () => {
    const todos = localStorage.getItem('todos');
    if (todos != null) {
      return Promise.resolve<Todo[]>(JSON.parse(todos));
    } else {
      return Promise.resolve<Todo[]>([]);
    }
  };

  saveTodo = async (todo: Todo) => {
    const todos = await this.getTodos();

    const id = todo.id;
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex >= 0) {
      todos[todoIndex] = todo;
    } else {
      todos.push(todo);
    }
    return localStorage.setItem('todos', JSON.stringify(todos));
  };

  deleteTodo = async (id: string) => {
    const todos = await this.getTodos();
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new TodoNotFoundException();
    } else {
      todos.splice(todoIndex, 1);
      return localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  clearCompleted = async () => {
    const todos = await this.getTodos();
    const completedTodosAmount = todos.filter(
      (todo) => todo.isCompleted
    ).length;

    const newTodos = todos.filter((todo) => !todo.isCompleted);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    return completedTodosAmount;
  };

  completeAll = async (isCompleted: boolean) => {
    const todos = await this.getTodos();
    const changedTodosAmount = todos.filter(
      (todo) => todo.isCompleted !== isCompleted
    ).length;
    const newTodos = todos.map((todo) => ({ ...todo, isCompleted }));
    localStorage.setItem('todos', JSON.stringify(newTodos));
    return changedTodosAmount;
  };
}

export class TodoNotFoundException extends Error {}
