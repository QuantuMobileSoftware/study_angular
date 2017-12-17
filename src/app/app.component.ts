import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    inputValue = '';
    todosList: string[] = [];

    addToList() {
        console.log('inputValue', this.inputValue);
        const dataToSave = this.inputValue.trim();

        if (dataToSave.length === 0) {
            return;
        }

        this.todosList.push(dataToSave);
        this.inputValue = '';
        console.log('this.todosList', this.todosList);
    }
}

