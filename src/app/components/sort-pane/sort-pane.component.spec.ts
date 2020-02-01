import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPaneComponent } from './sort-pane.component';

describe('SortPaneComponent', () => {
  let component: SortPaneComponent;
  let fixture: ComponentFixture<SortPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
