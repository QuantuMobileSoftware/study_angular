import { Component } from '@angular/core';
import {Todo} from './models/todo.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    inputValue = '';
    todosList: Todo[] = [];

    addToList() {
        const dataToSave = this.inputValue.trim();

        if (dataToSave.length === 0) {
            return;
        }

        this.todosList.push({
            value: dataToSave,
            isChecked: false
        });
        this.inputValue = '';
    }
}

