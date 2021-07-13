import { Component, Input, OnInit } from '@angular/core';
import { OperationStatus } from '../../dataset-page.data';

@Component({
  selector: 'app-body-cell8',
  templateUrl: './body-cell8.component.html',
  styleUrls: ['./body-cell8.component.scss']
})
export class BodyCell8Component implements OnInit {

  @Input() status: OperationStatus;
  constructor() { }

  ngOnInit(): void {
  }

}
