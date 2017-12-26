import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }
  @Input() todo: Todo;
  changeName = false;

  ngOnInit() {
  }

}
