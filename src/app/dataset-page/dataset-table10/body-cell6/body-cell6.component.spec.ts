import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCell6Component } from './body-cell6.component';

describe('BodyCell6Component', () => {
  let component: BodyCell6Component;
  let fixture: ComponentFixture<BodyCell6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCell6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCell6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
