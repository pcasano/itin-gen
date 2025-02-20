import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {FormStore} from "../store/multi-step.store";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-first-step-form',
  imports: [ReactiveFormsModule],
  templateUrl: './first-step-form.component.html',
  styleUrl: './first-step-form.component.scss'
})
export class FirstStepFormComponent implements OnInit {

  multiStepStore = inject(FormStore);

  private destroy$ = new Subject<void>();


  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName1: new FormControl('', [Validators.required]),
      lastName2: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.userForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(values => {
      this.multiStepStore.updateFirstStepUserForm(values);
    });
  }

}
