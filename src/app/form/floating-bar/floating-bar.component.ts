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

  @Input() isBackButtonPresent = false;

  @Input() isSubmitButtonPresent = false;

  @Input() isFirstUserFormValid = false;

  @Output() submitEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  isSubmitted = false;

  onCancel() {
    this.multiStepStore.cancel();
  }

  onNext() {
    this.multiStepStore.nextStep();
  }

  onBack() {
    this.multiStepStore.prevStep();
  }

  onSubmit() {
    this.isSubmitted = true;
    this.submitEvent.emit(this.isSubmitted);
  }

  onGotoInit() {
    this.multiStepStore.cancel();
    this.isSubmitted = false;
    this.submitEvent.emit(this.isSubmitted);
  }
}
