import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTablerComponent } from './icon-tabler.component';

describe('IconTablerComponent', () => {
  let component: IconTablerComponent;
  let fixture: ComponentFixture<IconTablerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconTablerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IconTablerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
