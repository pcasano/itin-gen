import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formular',
  imports: [ReactiveFormsModule],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss'
})
export class FormularComponent {


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
