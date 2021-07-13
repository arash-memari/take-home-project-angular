import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-cell6',
  templateUrl: './body-cell6.component.html',
  styleUrls: ['./body-cell6.component.scss']
})
export class BodyCell6Component implements OnInit {

  @Input() label: string;
  @Input() subLabel: string;
  constructor() { }

  ngOnInit(): void {
  }

}
