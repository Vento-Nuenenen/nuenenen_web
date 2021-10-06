import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbteilungCardComponent } from './abteilung-card.component';

describe('AbteilungCardComponent', () => {
  let component: AbteilungCardComponent;
  let fixture: ComponentFixture<AbteilungCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbteilungCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbteilungCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
