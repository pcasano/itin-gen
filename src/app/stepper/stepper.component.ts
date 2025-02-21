import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {

  @Input() currentStep: number = 0;

  readonly steps: string[] = ['Paso 0', 'Step 1', 'Step 2', 'Step 3'];


}
