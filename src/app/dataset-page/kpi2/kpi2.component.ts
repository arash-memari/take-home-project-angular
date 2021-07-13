import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi2',
  templateUrl: './kpi2.component.html',
  styleUrls: ['./kpi2.component.scss']
})
export class Kpi2Component implements OnInit {

  @Input() label: string;
  @Input() value: number;
  @Input() valueHint: number;
  @Input() note: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
