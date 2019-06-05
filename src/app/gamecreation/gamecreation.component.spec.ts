import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamecreationComponent } from './gamecreation.component';

describe('GamecreationComponent', () => {
  let component: GamecreationComponent;
  let fixture: ComponentFixture<GamecreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamecreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
