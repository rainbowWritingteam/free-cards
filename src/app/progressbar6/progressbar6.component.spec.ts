import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Progressbar6Component } from './progressbar6.component';

describe('Progressbar6Component', () => {
  let component: Progressbar6Component;
  let fixture: ComponentFixture<Progressbar6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Progressbar6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Progressbar6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
