import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbteilungSideBarComponent } from './abteilung-side-bar.component';

describe('AbteilungSideBarComponent', () => {
  let component: AbteilungSideBarComponent;
  let fixture: ComponentFixture<AbteilungSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbteilungSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbteilungSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
