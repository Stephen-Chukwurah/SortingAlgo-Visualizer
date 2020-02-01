import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortVisualizrComponent } from './sort-visualizr.component';

describe('SortVisualizrComponent', () => {
  let component: SortVisualizrComponent;
  let fixture: ComponentFixture<SortVisualizrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortVisualizrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortVisualizrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
