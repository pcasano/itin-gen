import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormStore} from "../store/multi-step.store";

@Component({
  selector: 'app-start-process',
  imports: [],
  templateUrl: './start-process.component.html',
  styleUrl: './start-process.component.scss',
/*  providers: [FormStore]*/
})
export class StartProcessComponent {

  multiStepStore = inject(FormStore);

  @Output() processStartedEvent = new EventEmitter<boolean>();

  onStart() {
    this.multiStepStore.nextStep();
    this.processStartedEvent.emit(true);
  }
}
