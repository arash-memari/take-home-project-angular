import { Component, Input, OnInit } from '@angular/core';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-button3',
  templateUrl: './button3.component.html',
  styleUrls: ['./button3.component.scss'],
})
export class Button3Component implements OnInit {
  @Input() label: string;
  @Input() icon: string;

  iconClass= ['fas', 'plus'];

  constructor() {}

  ngOnInit(): void {}

  iconString(): any {
    // debugger


    // return `['fas', '${this.icon}']`;

    if (this.icon=== "search")
      this.iconClass= ['fas', 'search'];

    return this.iconClass;
  }

}
