import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDifferenceCurrencyComponent } from './top-difference-currency.component';

describe('TopDifferenceCurrencyComponent', () => {
  let component: TopDifferenceCurrencyComponent;
  let fixture: ComponentFixture<TopDifferenceCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDifferenceCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDifferenceCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
