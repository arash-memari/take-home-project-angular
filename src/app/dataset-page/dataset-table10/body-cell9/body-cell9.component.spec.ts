import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCell9Component } from './body-cell9.component';

describe('BodyCell9Component', () => {
  let component: BodyCell9Component;
  let fixture: ComponentFixture<BodyCell9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCell9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCell9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
