import {Component, inject, Input, Signal} from '@angular/core';
import {FormStore} from "../store/multi-step.store";
import {FormGroup} from "@angular/forms";

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

  readonly firstStepUserForm: Signal<FormGroup>= this.multiStepStore.firstStepUserForm;

  onCancel() {
    this.multiStepStore.cancel();
  }

  onNext() {
    this.multiStepStore.nextStep();
  }

  onBack() {
    console.log("from bar", this.isFirstUserFormValid)
    console.log("from bar", this.firstStepUserForm().get("firstName")?.value)
    this.multiStepStore.prevStep();
  }
}
