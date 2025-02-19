import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepFormComponent } from './first-step-form.component';

describe('FormularComponent', () => {
  let component: FirstStepFormComponent;
  let fixture: ComponentFixture<FirstStepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstStepFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
