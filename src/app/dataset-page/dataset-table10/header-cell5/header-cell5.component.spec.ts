import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCell5Component } from './header-cell5.component';

describe('HeaderCell5Component', () => {
  let component: HeaderCell5Component;
  let fixture: ComponentFixture<HeaderCell5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCell5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCell5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
