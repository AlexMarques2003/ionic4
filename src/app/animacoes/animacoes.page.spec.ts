import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacoesPage } from './animacoes.page';

describe('AnimacoesPage', () => {
  let component: AnimacoesPage;
  let fixture: ComponentFixture<AnimacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
