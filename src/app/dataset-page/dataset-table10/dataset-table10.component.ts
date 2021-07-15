import { DatasetData, SortDirection } from './../dataset-page.data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset-table10',
  templateUrl: './dataset-table10.component.html',
  styleUrls: ['./dataset-table10.component.scss'],
})
export class DatasetTable10Component implements OnInit {
  @Input() datasets: DatasetData[];

  myDirection: SortDirection = 'DESC';

  ngOnInit(): void {}

  constructor() {}

  iconClass = ['fas'];

  iconString(): string[] {
    // debugger

    switch (this.myDirection) {
      case 'ASC':
        this.iconClass[1] = 'long-arrow-alt-up';

        break;
      case 'DESC':
        this.iconClass[1] = 'long-arrow-alt-down';

        break;
      default:
        this.iconClass[1] = 'plus';
    }

    return this.iconClass;
  }

  getDirection(): any {
    debugger;
    return this.myDirection;
  }

  sortTable() {
    if (this.myDirection == 'DESC') {
      debugger;
      this.datasets.sort((a, b) => a.predictionAvg - b.predictionAvg);
      this.myDirection = 'ASC';
    } else {
      this.datasets.sort((a, b) => b.predictionAvg - a.predictionAvg);
      this.myDirection = 'DESC';
    }
  }
}
