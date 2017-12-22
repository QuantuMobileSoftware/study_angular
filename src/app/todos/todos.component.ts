import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input('todoList') todosList: Todo[];
  dataToShow = 'all'; // active, completed

  ngOnInit() {
    console.log('todo-list', this.todosList);
  }

  getActiveCount() {
    const activeTodos = this.todosList.filter(todo => {
      return !todo.isChecked;
    });

    return activeTodos.length;
  }

  checkDataToShow(todoStatus) {
    let returnValue = true;
      if ((!todoStatus && this.dataToShow === 'completed') ||
          (todoStatus && this.dataToShow === 'active')) {
          returnValue = false;
      }

      return returnValue;
  }

    removeTodo(index) {
       this.todosList.splice(index, 1);
    }

    removeTodos() {
    this.todosList = [...this.todosList.filter( toDo => {
        return !toDo.isChecked;
      })];
    }

    isCompletedExist() {
      return this.todosList.filter( toDo => {
          return toDo.isChecked;
      }).length > 0;
    }

}
