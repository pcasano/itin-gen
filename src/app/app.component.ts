import {Component, inject, Signal} from '@angular/core';
import {CardsComponent} from "./cards/cards.component";
import {FloatingBarComponent} from "./form/floating-bar/floating-bar.component";
import {StartProcessComponent} from "./form/start-process/start-process.component";
import {FormStore} from "./form/store/multi-step.store";
import {FirstStepFormComponent} from "./form/first-step-form/first-step-form.component";
import {SecondStepFormComponent} from "./form/second-step-form/second-step-form.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [FirstStepFormComponent, CardsComponent, FloatingBarComponent, StartProcessComponent, SecondStepFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  multiStepStore = inject(FormStore);

  readonly step: Signal<number> = this.multiStepStore.step;

  readonly firstStepForm: Signal<FormGroup> = this.multiStepStore.firstStepUserForm;


}
