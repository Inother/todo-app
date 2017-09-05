import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

import { Todo } from '../todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Input() onChange;

  @Output() deleteRequest = new EventEmitter<Todo>();
  @Output() toggleRequest = new EventEmitter<Todo>();

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    // iconRegistry.addSvgIcon(
    //   'close',
    //   sanitizer.bypassSecurityTrustResourceUrl('../assets/ic_close_black_24px.svg')
    // );
  }

  toggle(completed) {
    // alert(completed);
    // this.todo.completed = completed;
    this.toggleRequest.emit(completed);
  }

  delete() {
    this.deleteRequest.emit();
  }
  
  ngOnInit() {
  }

}
