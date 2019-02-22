import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNativeCameraPage } from './component-native-camera.page';

describe('ComponentNativeCameraPage', () => {
  let component: ComponentNativeCameraPage;
  let fixture: ComponentFixture<ComponentNativeCameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentNativeCameraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNativeCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
