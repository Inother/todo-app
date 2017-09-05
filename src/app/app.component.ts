import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  type = 'all';

  buttons = [
    {
      title: 'All',
      type: 'all'
    },
    {
      title: 'Active',
      type: 'active'
    }, {
      title: 'Completed',
      type: 'completed'
    }
  ];

  constructor(private todoService: TodoService) {
  }

  onButtonClick(type) {
    this.type = type;
  }

  getLength(type: string): number {
    if (type === 'all') return this.todoService.todos.length;

    return this.todoService[`${type}Todos`].length;
  }
}
