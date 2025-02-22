import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {

  @Input() firstStepForm!: FormGroup<any>;

  formKeys: string[] = [];

  ngOnInit(): void {
    this.formKeys = Object.keys(this.firstStepForm.controls);
  }
}
