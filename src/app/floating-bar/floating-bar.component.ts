import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-floating-bar',
  imports: [],
  templateUrl: './floating-bar.component.html',
  styleUrl: './floating-bar.component.scss'
})
export class FloatingBarComponent {


  @Output() processCancelEvent = new EventEmitter<boolean>();


  onCancel() {
    this.processCancelEvent.emit(true);
  }
  
  onNext() {
    throw new Error('Method not implemented.');
  }

}
