import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDateTimePage } from './component-date-time.page';

describe('ComponentDateTimePage', () => {
  let component: ComponentDateTimePage;
  let fixture: ComponentFixture<ComponentDateTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDateTimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDateTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
