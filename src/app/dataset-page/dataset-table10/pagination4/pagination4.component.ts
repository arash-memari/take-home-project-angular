import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination4',
  templateUrl: './pagination4.component.html',
  styleUrls: ['./pagination4.component.scss']
})
export class Pagination4Component implements OnInit {

  @Input() firstRowNumber: number;
  @Input() lastRowNumber: number;
  @Input() totalRows: number;
  constructor() { }

  ngOnInit(): void {
  }

}
