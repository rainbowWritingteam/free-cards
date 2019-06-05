import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadernameComponent } from './leadername.component';

describe('LeadernameComponent', () => {
  let component: LeadernameComponent;
  let fixture: ComponentFixture<LeadernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
