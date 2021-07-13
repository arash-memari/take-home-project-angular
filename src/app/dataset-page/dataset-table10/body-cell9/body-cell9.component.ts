import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-cell9',
  templateUrl: './body-cell9.component.html',
  styleUrls: ['./body-cell9.component.scss']
})
export class BodyCell9Component implements OnInit {

  @Input() icon: string;
  constructor() { }

  ngOnInit(): void {
  }

}
