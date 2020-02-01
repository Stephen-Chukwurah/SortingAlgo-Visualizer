import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppFacade } from 'src/app/+state/app.facade';

@Component({
  selector: 'app-sort-navigator',
  templateUrl: './sort-navigator.component.html',
  styleUrls: ['./sort-navigator.component.scss']
})
export class SortNavigatorComponent implements OnInit {
  
  constructor(private facade: AppFacade) { }
  activeIndex: number;

  ngOnInit() {
    this.goToPane({id: 1, title: 'Insertion Sort', image: './assets/images/demos/insertion.png' });
  }

  goToPane(pane: Pane) {
    this.activeIndex= pane.id;
    this.facade.loadCurrentPane(pane);
  }

}
