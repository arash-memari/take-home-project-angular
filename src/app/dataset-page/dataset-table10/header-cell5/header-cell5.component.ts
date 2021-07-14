import { SortDirection } from './../../dataset-page.data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-cell5',
  templateUrl: './header-cell5.component.html',
  styleUrls: ['./header-cell5.component.scss']
})
export class HeaderCell5Component implements OnInit {

  @Input() label: string;
  @Input() textAlign: string = "left";
  @Input() sortDirection: SortDirection = '';
  @Input() textColor: boolean ;

  iconClass= ['fas'];

  constructor() {}

  ngOnInit(): void {}

  iconString(): string[] {
    // debugger

    this.iconClass[1]= this.sortDirection;

    return this.iconClass;
  }

}
