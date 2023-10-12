import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalButtonsComponent } from './cal-buttons.component';

describe('CalButtonsComponent', () => {
  let component: CalButtonsComponent;
  let fixture: ComponentFixture<CalButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalButtonsComponent]
    });
    fixture = TestBed.createComponent(CalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
