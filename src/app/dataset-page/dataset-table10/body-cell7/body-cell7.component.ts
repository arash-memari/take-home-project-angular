import { DatasetImportance } from './../../dataset-page.data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-cell7',
  templateUrl: './body-cell7.component.html',
  styleUrls: ['./body-cell7.component.scss']
})
export class BodyCell7Component implements OnInit {

  @Input() importance: DatasetImportance;
  constructor() { }

  ngOnInit(): void {
  }

}
