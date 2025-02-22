import {Component, inject, Input} from '@angular/core';
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

  @Input() isFirstUserFormValid = false;

  onCancel() {
    this.multiStepStore.cancel();
  }

  onNext() {
    this.multiStepStore.nextStep();
  }

  onBack() {
    this.multiStepStore.prevStep();
  }
}
