import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi1',
  templateUrl: './kpi1.component.html',
  styleUrls: ['./kpi1.component.scss'],
})
export class Kpi1Component implements OnInit {
  @Input() label: string;
  @Input() value: string;

  constructor() {}

  ngOnInit(): void {}
}
