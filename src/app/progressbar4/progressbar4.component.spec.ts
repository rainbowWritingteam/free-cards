import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Progressbar4Component } from './progressbar4.component';

describe('Progressbar4Component', () => {
  let component: Progressbar4Component;
  let fixture: ComponentFixture<Progressbar4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Progressbar4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Progressbar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
