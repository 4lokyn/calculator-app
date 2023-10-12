import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalResultsComponent } from './cal-results.component';

describe('CalResultsComponent', () => {
  let component: CalResultsComponent;
  let fixture: ComponentFixture<CalResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalResultsComponent]
    });
    fixture = TestBed.createComponent(CalResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
