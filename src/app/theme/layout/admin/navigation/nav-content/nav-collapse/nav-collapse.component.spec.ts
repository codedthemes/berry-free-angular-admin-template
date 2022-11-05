import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavCollapseComponent } from './nav-collapse.component';

describe('NavCollapseComponent', () => {
  let component: NavCollapseComponent;
  let fixture: ComponentFixture<NavCollapseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavCollapseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
