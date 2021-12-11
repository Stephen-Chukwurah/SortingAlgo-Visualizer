import { Component, OnInit } from '@angular/core';
import { AppFacade } from '../../+state/app.facade';

@Component({
  selector: 'app-sort-grid',
  templateUrl: './sort-grid.component.html',
  styleUrls: ['./sort-grid.component.scss']
})
export class SortGridComponent implements OnInit {
  constructor(public facade: AppFacade) { }

  ngOnInit() {
  }

}
