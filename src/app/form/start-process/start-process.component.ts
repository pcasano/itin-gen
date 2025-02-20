import {Component, inject} from '@angular/core';
import {FormStore} from "../store/multi-step.store";

@Component({
  selector: 'app-start-process',
  imports: [],
  templateUrl: './start-process.component.html',
  styleUrl: './start-process.component.scss',
})
export class StartProcessComponent {

  multiStepStore = inject(FormStore);

  onStart() {
    this.multiStepStore.nextStep();
  }
}
