import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularComponent } from "./formular/formular.component";
import { CardsComponent } from "./cards/cards.component";
import { FloatingBarComponent } from "./floating-bar/floating-bar.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FormularComponent, CardsComponent, FloatingBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'itin-gen';
}
