import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirCualityComponent } from './air-cuality.component';

describe('AirCualityComponent', () => {
  let component: AirCualityComponent;
  let fixture: ComponentFixture<AirCualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirCualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirCualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
