import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormStore} from "../store/multi-step.store";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-floating-bar',
  imports: [],
  templateUrl: './floating-bar.component.html',
  styleUrl: './floating-bar.component.scss'
})
export class FloatingBarComponent {

  multiStepStore = inject(FormStore);

  @Output() processCancelEvent = new EventEmitter<boolean>();

  @Input() isBackButtonPresent = false;

  readonly a = toSignal(this.multiStepStore.firstStepUserForm$);


  onCancel() {
  this.processCancelEvent.emit(true);
    this.multiStepStore.cancel();
  }

  onNext() {
    this.multiStepStore.nextStep();
  }

  onBack() {
    this.multiStepStore.prevStep();
  }
}
