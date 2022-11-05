import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavGroupComponent } from './nav-group.component';

describe('NavGroupComponent', () => {
  let component: NavGroupComponent;
  let fixture: ComponentFixture<NavGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavGroupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
