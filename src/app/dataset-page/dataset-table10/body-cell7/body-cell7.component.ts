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


  iconClass= ['fas'];
  myVisibility: string;
  iconStatus: boolean=true;

  constructor() {}

  ngOnInit(): void {}


  iconString(): string[] {
    // debugger


    switch(this.importance) {
      case 'High':
        this.iconClass[1]="align-justify";
        this.myVisibility= "visible";
        this.iconStatus= true;
        break;
      case 'Medium':
        this.iconClass[1]="grip-lines";
        this.myVisibility= "visible";
        this.iconStatus= true;
        break;
      case 'Low':
        this.iconClass[1]="minus";
        this.myVisibility= "visible";
        this.iconStatus= true;
        break;
      // case "":
      //   this.iconClass[1]="question-circle";
      //   this.myVisibility= "visible";
      //   this.iconStatus= false;
      //   break;
      default:
        this.iconClass[1]="plus";
        this.myVisibility= "hidden";
        this.iconStatus= false;
    }




    return this.iconClass;
  }

  isKnown():boolean{
    return this.iconStatus;
  }

  isVisible(): string{
    return this.myVisibility;
  }

  getLabel(): any{
    if (this.importance) return this.importance;
    if (this.lastPrediction && this.lastPrediction === "") this.label= this.lastPrediction;
    if (this.predictionAvgLabel && this.predictionAvgLabel === "") this.label= this.predictionAvgLabel;

    return this.label;
  }

}
