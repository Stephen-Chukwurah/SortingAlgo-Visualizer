import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AppFacade } from 'src/app/+state/app.facade';
import { SortService } from 'src/app/services/sort.service';


@Component({
  selector: 'app-sort-visualizr',
  templateUrl: './sort-visualizr.component.html',
  styleUrls: ['./sort-visualizr.component.scss']
})
export class SortVisualizrComponent implements OnInit {
  bars$: Observable<Bar[]>;
  @ViewChild('barContainer', { static: false }) barContainer: ElementRef;

  constructor(private facade: AppFacade, private sortService: SortService) { }

  ngOnInit() {
    this.bars$ = this.facade.data$
    this.facade.isSorting$.subscribe(ready => {
      if (ready) {
        this.sort();
      }
    });
  }

  sort() {
    this.sortService.doSort(this.barContainer);
  }

}
