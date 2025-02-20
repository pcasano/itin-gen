import {Component, inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormStore} from "../store/multi-step.store";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-first-step-form',
  imports: [ReactiveFormsModule],
  templateUrl: './first-step-form.component.html',
  styleUrl: './first-step-form.component.scss'
})
export class FirstStepFormComponent implements OnInit {

  @Input() defaultValuesFirstUserForm!: FormGroup;

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

    console.log("from first step", this.defaultValuesFirstUserForm)
    console.log("from first step", this.defaultValuesFirstUserForm.get("firstName")?.value)

    this.userForm.patchValue(this.defaultValuesFirstUserForm.value);

    this.userForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(values => {
      this.multiStepStore.updateFirstStepUserForm(values);
    });
  }


}
