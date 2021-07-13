import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetTable10Component } from './dataset-table10.component';

describe('DatasetTable10Component', () => {
  let component: DatasetTable10Component;
  let fixture: ComponentFixture<DatasetTable10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetTable10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetTable10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
