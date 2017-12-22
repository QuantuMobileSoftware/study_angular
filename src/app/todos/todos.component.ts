import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../models/todo.model';
import {TodosFooterComponent} from '../todos-footer/todos-footer.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todosList: Todo[];

  @ViewChild(TodosFooterComponent) footer: TodosFooterComponent;

  ngOnInit() {
  }

  remove(i: number) {
    this.todosList.splice(i, 1);
  }


}
