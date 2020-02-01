import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortNavigatorComponent } from './sort-navigator.component';

describe('SortNavigatorComponent', () => {
  let component: SortNavigatorComponent;
  let fixture: ComponentFixture<SortNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
