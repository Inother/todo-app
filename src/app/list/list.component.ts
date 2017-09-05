import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  todos: Todo[];
  @Input() type: string = 'all';

  constructor(private todoService: TodoService) { }

  onToggleTodo(todo, completed) {
    this.todoService.toggleTodo(todo, completed);
  }

  delete(todo) {
    this.todoService.removeTodo(todo);
  }

  ngOnInit() {
    this.updateTodos();
    // this.getTodoList();
  }

  ngOnChanges() {
    this.updateTodos();
  }

  updateTodos() {
    if (this.type === 'all') {
      this.todos = this.todoService.todos;
      return;
    }

    this.todos = this.todoService[`${this.type}Todos`];
  }

}
