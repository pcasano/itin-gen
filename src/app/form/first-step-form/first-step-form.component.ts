import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormStore} from "../store/multi-step.store";
import {debounceTime, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-first-step-form',
  imports: [ReactiveFormsModule],
  templateUrl: './first-step-form.component.html',
  styleUrl: './first-step-form.component.scss'
})
export class FirstStepFormComponent implements OnInit {

  @Input() defaultValuesFirstUserForm!: FormGroup;

  @Output() isFirstUserFormValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  multiStepStore = inject(FormStore);

  private destroy$ = new Subject<void>();

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName1: new FormControl('', [Validators.required]),
      lastName2: new FormControl('', [])
    });
  }

  ngOnInit() {
    this.userForm.patchValue(this.defaultValuesFirstUserForm.value);
    this.isFirstUserFormValid.emit(this.userForm.valid);
    this.userForm.valueChanges
      .pipe(
        debounceTime(1500),
        takeUntil(this.destroy$))
      .subscribe(values => {
        this.isFirstUserFormValid.emit(this.userForm.valid);
        this.multiStepStore.updateFirstStepUserForm(values);
      });
  }
}
