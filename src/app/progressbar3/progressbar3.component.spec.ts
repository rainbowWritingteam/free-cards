import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Progressbar3Component } from './progressbar3.component';

describe('Progressbar3Component', () => {
  let component: Progressbar3Component;
  let fixture: ComponentFixture<Progressbar3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Progressbar3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Progressbar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
