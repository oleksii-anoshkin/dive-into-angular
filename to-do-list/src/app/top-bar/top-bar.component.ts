import { Component, OnInit } from '@angular/core';
import { Todos } from '../todo';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
  
export class TopBarComponent {
  // classes
  navClass = "navbar bg-body-tertiary";
  containerClass = "container-fluid";
  titleClass = "navbar-brand h1";
  formClass = "d-flex";
  inputClass = "form-control me-2";
  btnClass = "btn btn-secondary";

  // texts
  titleText = "TODO List";
  btnText = "Add";
  idText = 'todo'

  // variables
  value = '';
  idNumb = 0

  // methods
  checkKey(event: any) {
    switch (event.key) {
      case "Enter":
        this.addNewTodo();
        break;
      
      default:
        this.value = event.target.value
        break;
    }
  }

  addNewTodo() {
    if (this.value !== '') {
      Todos.push({ id: `${this.idText}-${this.idNumb}`, text: this.value, done: false });
      this.value = '';
      this.idNumb += 1;
    }
  }
}
