import { SortDirection } from './../../dataset-page.data';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-cell5',
  templateUrl: './header-cell5.component.html',
  styleUrls: ['./header-cell5.component.scss'],
})
export class HeaderCell5Component implements OnInit {
  @Input() label: string;
  @Input() textAlign: string = 'center';
  @Input() sortDirection: SortDirection = '';
  @Input() textColor: boolean;

  iconClass = ['fas'];
  myVisibility: string;

  constructor() {}

  ngOnInit(): void {}

  iconString(): string[] {
    // debugger

    switch (this.sortDirection) {
      case 'ASC':
        this.iconClass[1] = 'long-arrow-alt-up';
        this.myVisibility = 'visible';
        break;
      case 'DESC':
        this.iconClass[1] = 'long-arrow-alt-down';
        this.myVisibility = 'visible';
        break;
      default:
        this.iconClass[1] = 'plus';
        this.myVisibility = 'hidden';
    }

    return this.iconClass;
  }

  isVisible(): string {
    return this.myVisibility;
  }
}
