import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartContinentComponent } from './chart-continent.component';

describe('ChartContinentComponent', () => {
  let component: ChartContinentComponent;
  let fixture: ComponentFixture<ChartContinentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartContinentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
