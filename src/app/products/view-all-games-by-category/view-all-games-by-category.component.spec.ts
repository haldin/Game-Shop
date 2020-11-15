import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllGamesByCategoryComponent } from './view-all-games-by-category.component';

describe('ViewAllGamesByCategoryComponent', () => {
  let component: ViewAllGamesByCategoryComponent;
  let fixture: ComponentFixture<ViewAllGamesByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllGamesByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllGamesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
