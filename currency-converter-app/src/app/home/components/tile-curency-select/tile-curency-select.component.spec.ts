import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCurencySelectComponent } from './tile-curency-select.component';

describe('TileCurencySelectComponent', () => {
  let component: TileCurencySelectComponent;
  let fixture: ComponentFixture<TileCurencySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileCurencySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileCurencySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
