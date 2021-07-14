import { Component, Input, OnInit } from '@angular/core';
import { OperationStatus } from '../../dataset-page.data';

@Component({
  selector: 'app-body-cell8',
  templateUrl: './body-cell8.component.html',
  styleUrls: ['./body-cell8.component.scss']
})
export class BodyCell8Component implements OnInit {

  @Input() status: OperationStatus;



  iconClass= ['fas'];
  textColor="yellow";

  constructor() {}

  ngOnInit(): void {}

  iconString(): string[] {

    // debugger

    switch(this.status) {
      case 1:
        this.iconClass[1]="check-circle";
        this.textColor="#1EAE98";
        break;
      case 0:
        this.iconClass[1]="exclamation-circle";
        this.textColor="#D54C4C";
        break;
      default:
        this.iconClass[1]="question-circle";
        this.textColor="grey";
    }


    return this.iconClass;
  }

  setColor(): any{
    return this.textColor;
  }

}
