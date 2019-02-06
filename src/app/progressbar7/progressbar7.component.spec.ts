import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Progressbar7Component } from './progressbar7.component';

describe('Progressbar7Component', () => {
  let component: Progressbar7Component;
  let fixture: ComponentFixture<Progressbar7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Progressbar7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Progressbar7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
