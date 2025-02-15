import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularComponent } from "./formular/formular.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FormularComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'itin-gen';
}
