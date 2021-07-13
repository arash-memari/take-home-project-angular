import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button3',
  templateUrl: './button3.component.html',
  styleUrls: ['./button3.component.scss']
})
export class Button3Component implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit(): void {
  }

}
