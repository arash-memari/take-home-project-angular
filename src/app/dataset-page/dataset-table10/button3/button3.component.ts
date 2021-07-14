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
  constructor() {}

  ngOnInit(): void {}

  iconString(): string {
    // debugger


    // return `['fas', '${this.icon}']`;

    return "'['fas', 'plus']'";
  }

}
