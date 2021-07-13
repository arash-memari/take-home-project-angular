import { LocalData } from './dataset-page.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset-page',
  templateUrl: './dataset-page.component.html',
  styleUrls: ['./dataset-page.component.scss']
})
export class DatasetPageComponent implements OnInit {

  data = LocalData;
  constructor() { }

  ngOnInit(): void {
  }

}
