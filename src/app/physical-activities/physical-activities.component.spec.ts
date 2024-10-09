import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalActivitiesComponent } from './physical-activities.component';

describe('PhysicalActivitiesComponent', () => {
  let component: PhysicalActivitiesComponent;
  let fixture: ComponentFixture<PhysicalActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhysicalActivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
