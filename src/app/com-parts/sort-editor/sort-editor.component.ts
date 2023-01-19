import { Component, OnInit } from '@angular/core';
import { AppFacade } from 'src/app/+state/app.facade';
import { Algorithms } from 'src/app/constants/sort-algorithm.constant';

@Component({
  selector: 'app-sort-editor',
  templateUrl: './sort-editor.component.html',
  styleUrls: ['./sort-editor.component.scss']
})
export class SortEditorComponent implements OnInit {
  Algorithms = Algorithms;
  algorithm = Algorithms[0];
  constructor(public facade: AppFacade) { }

  ngOnInit() {
    this.presetVisualizr();
  }

  setDataRange(range: number) {
    this.facade.setDataSize(+range);
  }

  sortData() {
    this.facade.triggerIsSorting();
  }

  handleAlgorithmChange() {
    this.presetVisualizr();
  }

  presetVisualizr() {
    this.facade.loadCurrentPane(this.algorithm);
    this.facade.setDataSize(100);
  }

}
