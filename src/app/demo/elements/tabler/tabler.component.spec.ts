import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerComponent } from './tabler.component';

describe('TablerComponent', () => {
  let component: TablerComponent;
  let fixture: ComponentFixture<TablerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TablerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
