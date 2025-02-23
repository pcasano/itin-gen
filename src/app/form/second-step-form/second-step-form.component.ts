import {Component, inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {debounceTime, Subject, takeUntil} from "rxjs";
import {FormStore} from "../store/multi-step.store";

@Component({
  selector: 'app-second-step-form',
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './second-step-form.component.html',
  styleUrl: './second-step-form.component.scss'
})
export class SecondStepFormComponent implements OnInit {

  userForm: FormGroup;

  @Input() defaultValuesSecondUserForm!: FormGroup;

  private destroy$ = new Subject<void>();

  multiStepStore = inject(FormStore);

  constructor() {
    this.userForm = new FormGroup({
      direction: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}$')]),
      province: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.userForm.patchValue(this.defaultValuesSecondUserForm.value);
    this.userForm.valueChanges
      .pipe(
        debounceTime(1000),
        takeUntil(this.destroy$))
      .subscribe(values => {
        this.multiStepStore.updateSecondStepUserForm(values);
      });
  }

}
