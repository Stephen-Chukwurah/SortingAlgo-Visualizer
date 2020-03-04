import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AppFacade } from 'src/app/+state/app.facade';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-sort-editor',
  templateUrl: './sort-editor.component.html',
  styleUrls: ['./sort-editor.component.scss']
})
export class SortEditorComponent implements OnInit {

  data$: Observable<Pane>;

  constructor(private facade: AppFacade) { }

  ngOnInit() {
    this.data$ = this.facade.currentPane$;
    this.facade.setDataSize(100);
  }

  setDataRange(range: number) {
    this.facade.setDataSize(+range);
  }

  sortData() {
    this.facade.triggerIsSorting();
  }

}
