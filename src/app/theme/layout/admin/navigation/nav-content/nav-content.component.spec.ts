import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavContentComponent } from './nav-content.component';

describe('NavContentComponent', () => {
  let component: NavContentComponent;
  let fixture: ComponentFixture<NavContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavContentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
