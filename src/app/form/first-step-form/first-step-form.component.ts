import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-step-form',
  imports: [ReactiveFormsModule],
  templateUrl: './first-step-form.component.html',
  styleUrl: './first-step-form.component.scss'
})
export class FirstStepFormComponent {


  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName1: new FormControl('', [Validators.required]),
      lastName2: new FormControl('', [Validators.required])
    });
  }

  onNext() {
    console.log(this.userForm);
    }

}
