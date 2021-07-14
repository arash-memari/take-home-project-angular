import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-cell9',
  templateUrl: './body-cell9.component.html',
  styleUrls: ['./body-cell9.component.scss'],
})
export class BodyCell9Component implements OnInit {
  @Input() icon: string;
  iconClass = ['fas'];

  constructor() {}

  ngOnInit(): void {}

  iconString(): string[] {
    // debugger

    if (this.icon === 'view_headline') {
      this.iconClass[1] = 'bars';
    } else {
      this.iconClass[1] = this.icon;
    }

    return this.iconClass;
  }
}
