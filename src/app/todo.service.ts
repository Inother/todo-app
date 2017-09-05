import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  todos: Todo[];
  completedTodos: Todo[] = [];
  activeTodos: Todo[] = [];

  constructor() {
    this.todos = this.retrieveTodos() || [];
    this.syncTodos();
  }

  addTodo(name: string) {
    // this.todos = [new Todo(name)].concat(this.todos);
    this.todos.unshift(new Todo(name));
    this.afterChange();
  }

  retrieveTodos() {
    return JSON.parse(localStorage.getItem('todos'));
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo, completed: boolean = !todo.completed) {
    todo.completed = completed;
    this.afterChange();
  }

  removeTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo),1);
    this.afterChange();
  }

  syncTodos() {
    this.completedTodos.length = 0;
    this.completedTodos.push(...this.todos.filter(t => t.completed));
    this.activeTodos.length = 0;
    this.activeTodos.push(...this.todos.filter(t => !t.completed));
  }

  afterChange() {
    this.syncTodos();
    this.saveTodos();
  }
}
