import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDifferenceTableComponent } from './top-difference-table.component';

describe('TopDifferenceTableComponent', () => {
  let component: TopDifferenceTableComponent;
  let fixture: ComponentFixture<TopDifferenceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDifferenceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDifferenceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
