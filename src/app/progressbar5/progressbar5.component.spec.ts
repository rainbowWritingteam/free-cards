import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Progressbar5Component } from './progressbar5.component';

describe('Progressbar5Component', () => {
  let component: Progressbar5Component;
  let fixture: ComponentFixture<Progressbar5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Progressbar5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Progressbar5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
