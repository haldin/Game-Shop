import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllGamesComponent } from './view-all-games.component';

describe('ViewAllGamesComponent', () => {
  let component: ViewAllGamesComponent;
  let fixture: ComponentFixture<ViewAllGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
