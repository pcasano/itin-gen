import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormStore} from "../store/multi-step.store";

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

  onCancel() {
  this.processCancelEvent.emit(true);
    this.multiStepStore.cancel();
  }

  onNext() {
    this.multiStepStore.nextStep();
  }

  onBack() {
    console.log("from bar", this.multiStepStore.firstStepUserForm())
    console.log("from bar", this.multiStepStore.firstStepUserForm().get("firstName")?.value)
    this.multiStepStore.prevStep();
  }
}
