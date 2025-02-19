import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-second-step-form',
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './second-step-form.component.html',
  styleUrl: './second-step-form.component.scss'
})
export class SecondStepFormComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName1: new FormControl('', [Validators.required]),
      lastName2: new FormControl('', [Validators.required])
    });
  }

}
