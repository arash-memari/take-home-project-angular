import { SortDirection } from './../../dataset-page.data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-cell5',
  templateUrl: './header-cell5.component.html',
  styleUrls: ['./header-cell5.component.scss']
})
export class HeaderCell5Component implements OnInit {

  @Input() label: string;
  @Input() textAlign: string = "right";
  @Input() sortDirection: SortDirection = '';
  constructor() { }

  ngOnInit(): void {
  }

}
