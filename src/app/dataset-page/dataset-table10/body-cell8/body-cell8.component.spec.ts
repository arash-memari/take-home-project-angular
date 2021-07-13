import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCell8Component } from './body-cell8.component';

describe('BodyCell8Component', () => {
  let component: BodyCell8Component;
  let fixture: ComponentFixture<BodyCell8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCell8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCell8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
