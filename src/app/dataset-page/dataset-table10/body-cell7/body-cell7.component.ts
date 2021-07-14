import { DatasetImportance } from './../../dataset-page.data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-cell7',
  templateUrl: './body-cell7.component.html',
  styleUrls: ['./body-cell7.component.scss']
})
export class BodyCell7Component implements OnInit {

  @Input() importance: DatasetImportance;
  @Input() lastPrediction: string;
  @Input() predictionAvgLabel: string;
  @Input() label: string;


  constructor() { }

  ngOnInit(): void {
  }

  getLabel(): any{
    if (this.importance) return this.importance;
    if (this.lastPrediction && this.lastPrediction === "") this.label= this.lastPrediction;
    if (this.predictionAvgLabel && this.predictionAvgLabel === "") this.label= this.predictionAvgLabel;

    return this.label;
  }

}
