import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-process',
  imports: [],
  templateUrl: './start-process.component.html',
  styleUrl: './start-process.component.scss'
})
export class StartProcessComponent {

  @Output() processStartedEvent = new EventEmitter<boolean>();

  onStart() {
    this.processStartedEvent.emit(true);
  }
}
