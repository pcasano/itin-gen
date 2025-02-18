import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

export interface FormState {
  firstStepUserForm: FormGroup;
  step: number
}

const initialFormState = {
  firstStepUserForm: new FormGroup({}),
  step: 1
}

@Injectable()
export class MoviesStore extends ComponentStore<FormState> {

  readonly firstStepUserForm$: Observable<FormGroup> = this.select(state => state.firstStepUserForm);

  readonly step$: Observable<number> = this.select(state => state.step);

  readonly updateFormData = this.updater((state, formData: FormState) => ({
    ...state,
    ...formData,
  }));

  readonly nextStep = this.updater((state) => ({
    ...state,
    step: state.step + 1,
  }));

  readonly prevStep = this.updater((state) => ({
    ...state,
    step: state.step > 1 ? state.step - 1 : 1,
  }));

}
