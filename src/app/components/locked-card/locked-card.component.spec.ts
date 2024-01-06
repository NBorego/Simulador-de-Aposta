import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedCardComponent } from './locked-card.component';

describe('LockedCardComponent', () => {
  let component: LockedCardComponent;
  let fixture: ComponentFixture<LockedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
