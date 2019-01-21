import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCheckBoxPage } from './component-check-box.page';

describe('ComponentCheckBoxPage', () => {
  let component: ComponentCheckBoxPage;
  let fixture: ComponentFixture<ComponentCheckBoxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCheckBoxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCheckBoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
