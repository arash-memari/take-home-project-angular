import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCell7Component } from './body-cell7.component';

describe('BodyCell7Component', () => {
  let component: BodyCell7Component;
  let fixture: ComponentFixture<BodyCell7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCell7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCell7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
