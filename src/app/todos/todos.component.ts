import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input('todoList') todosList: Todo[];


  ngOnInit() {
    console.log('todo-list', this.todosList);
  }

  getActiveCount() {
    const activeTodos = this.todosList.filter(todo => {
      return !todo.isChecked;
    });

    return activeTodos.length;
  }

}
