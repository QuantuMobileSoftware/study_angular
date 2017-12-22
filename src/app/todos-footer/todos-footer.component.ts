import {Component, Input, OnInit} from '@angular/core';
import {DisplayMode} from './todos-footer.display-mode';
import {Todo} from '../models/todo.model';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.css']
})
export class TodosFooterComponent implements OnInit {

  readonly Mode = DisplayMode;

  displayMode = DisplayMode.ALL;

  @Input() todoList: Todo[];

  ngOnInit() {
  }

  getActiveTodoCount(): number {
    return this.todoList.filter(todo => !todo.isChecked).length;
  }

  anyChecked(): Boolean {
    return this.todoList.some(todo => todo.isChecked);
  }

  displayed(todo: Todo): Boolean {
    switch (this.displayMode) {
      case DisplayMode.ALL:
        return true;
      case DisplayMode.ACTIVE:
        return !todo.isChecked;
      case DisplayMode.COMPLETED:
        return todo.isChecked;
    }
  }

  removeCompleted() {
    for (let i = 0; i < this.todoList.length; i++) {
      let count = 0;
      for (let j = i; j < this.todoList.length && this.todoList[j].isChecked; j++) {
        count++;
      }
      if (count > 0) {
        this.todoList.splice(i, count);
      }
    }
  }
}
