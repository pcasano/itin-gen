import { Component, signal, WritableSignal } from '@angular/core';
import { FormularComponent } from "./formular/formular.component";
import { CardsComponent } from "./cards/cards.component";
import { FloatingBarComponent } from "./floating-bar/floating-bar.component";
import { StartProcessComponent } from "./start-process/start-process.component";

@Component({
  selector: 'app-root',
  imports: [FormularComponent, CardsComponent, FloatingBarComponent, StartProcessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isStartedSignal: WritableSignal<boolean> = signal(false);

  processEvent(isStarted: boolean) {
    this.isStartedSignal.set(isStarted);
  }

  cancelEvent(isCancel: boolean) {
    this.isStartedSignal.set(!isCancel);
  }
}
