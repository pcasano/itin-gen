import {Injectable, Signal} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

export interface FormState {
  firstStepUserForm: FormGroup;
  step: number
}

const initialFormState = {
  firstStepUserForm: new FormGroup({}),
  step: 0
}

@Injectable({providedIn: 'root',})
export class FormStore extends ComponentStore<FormState> {

  constructor() {
    super(initialFormState);
  }

  readonly firstStepUserForm: Signal<FormGroup> = this.selectSignal(state => state.firstStepUserForm);

  readonly firstStepUserForm$: Observable<FormGroup> = this.select(state => state.firstStepUserForm);

  readonly step: Signal<number> = this.selectSignal(state => state.step);

  readonly nextStep = this.updater((state) => ({
    ...state,
    step: state.step + 1,
  }));

  readonly cancel = this.updater((state) => ({
    ...state,
    step: 0,
  }));

  readonly prevStep = this.updater((state) => ({
    ...state,
    step: state.step > 1 ? state.step - 1 : 1,
  }));

  readonly updateFirstStepUserForm = this.updater(
    (state, updatedValues: FormGroup) => {

      Object.keys(updatedValues).forEach(key => {
        const value = updatedValues[key as keyof typeof updatedValues];
        if (state.firstStepUserForm.contains(key)) {
          state.firstStepUserForm.get(key)?.setValue(value);
        } else {
          state.firstStepUserForm.addControl(key, new FormControl(value));
        }
      });

      return { ...state };
    }
  );

}
