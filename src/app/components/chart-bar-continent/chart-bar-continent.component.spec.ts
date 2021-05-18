import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarContinentComponent } from './chart-bar-continent.component';

describe('ChartBarContinentComponent', () => {
  let component: ChartBarContinentComponent;
  let fixture: ComponentFixture<ChartBarContinentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBarContinentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBarContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
