import { Component, Input } from '@angular/core';
import { Todos } from '../todo';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
  
export class MainContentComponent {
  // input
  @Input() hiddenCompleted: boolean;

  // classes
  todosClass = "list-group";
  todoClass = "list-group-item";
  checkInputClass = "form-check-input me-1";
  checkInputLabelClass = "form-check-label";
  closeBtnClass = "btn-close";
  todoBoxClass = "input-label-box";

  // variables
  idText = 'todo'
  index?: number;
  newTodos?: any;
  newtodos?: any;
  
  // methods
  setTodos() {
    this.newTodos = [].concat(Todos.filter((t) => t.done === false), Todos.filter((t) => t.done === true));
    return this.hiddenCompleted ? this.newTodos.filter((t) => t.done === false) : this.newTodos;
  }

  setChecked(done: boolean) {
    return done ? "checked" : ""
  }

  changeCheck(id: string) {
    Todos.forEach((t) => { if (t.id === id) { t.done = !t.done } });
  }

  removeTodo(todo: any) {
    this.index = Todos.indexOf(todo);
    Todos.splice(this.index, 1);
  }
}
