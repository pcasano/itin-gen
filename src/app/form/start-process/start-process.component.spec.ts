import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProcessComponent } from './start-process.component';

describe('StartProcessComponent', () => {
  let component: StartProcessComponent;
  let fixture: ComponentFixture<StartProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
