import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormatValuePipe} from "../format-value-pipe.pipe";

@Component({
  selector: 'app-summary',
  imports: [
    FormatValuePipe
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {

  @Input() firstStepForm!: FormGroup<any>;

  @Input() isSubmitted: boolean = false;

  formKeys: string[] = [];

  ngOnInit(): void {
    this.formKeys = Object.keys(this.firstStepForm.controls);
  }
}
