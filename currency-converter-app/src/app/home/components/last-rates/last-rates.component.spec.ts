import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRatesComponent } from './last-rates.component';

describe('LastRatesComponent', () => {
  let component: LastRatesComponent;
  let fixture: ComponentFixture<LastRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
