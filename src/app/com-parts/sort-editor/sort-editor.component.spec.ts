import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortEditorComponent } from './sort-editor.component';

describe('SortEditorComponent', () => {
  let component: SortEditorComponent;
  let fixture: ComponentFixture<SortEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
