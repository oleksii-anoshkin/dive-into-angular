import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { hiddenCompleted } from '../todo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
  
export class FooterComponent {
  // input
  @Input() hiddenCompleted: boolean;

  // output
  @Output() newHiddenCompleted = new EventEmitter<boolean>();
  
  // classes
  firstContainerClass = "navbar bg-body-tertiary";
  secondContainerClass = "container-fluid";
  thirdContainerClass = "d-flex";
  btnClass = "btn btn-secondary";

  // variables
  setMessage() {
    return this.hiddenCompleted ? "Show all" : "Hide completed";
  }

  // methods
  chengeHidden() {
    this.newHiddenCompleted.emit(!this.hiddenCompleted);
  }
}
