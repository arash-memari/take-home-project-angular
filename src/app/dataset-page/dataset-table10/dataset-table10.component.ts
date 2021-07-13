import { DatasetData } from './../dataset-page.data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset-table10',
  templateUrl: './dataset-table10.component.html',
  styleUrls: ['./dataset-table10.component.scss']
})
export class DatasetTable10Component implements OnInit {

  @Input() datasets: DatasetData[];
  constructor() { }

  ngOnInit(): void {
  }

}
