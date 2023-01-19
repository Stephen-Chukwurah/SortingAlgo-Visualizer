import { Component, OnInit } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';
import { AppFacade } from '../../+state/app.facade';

@Component({
  selector: 'app-sort-grid',
  templateUrl: './sort-grid.component.html',
  styleUrls: ['./sort-grid.component.scss']
})
export class SortGridComponent implements OnInit {
  constructor(public facade: AppFacade, public service: SortService) { }

  ngOnInit() {
  }

}
