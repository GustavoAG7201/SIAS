import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvRaysComponent } from './uv-rays.component';

describe('UvRaysComponent', () => {
  let component: UvRaysComponent;
  let fixture: ComponentFixture<UvRaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UvRaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UvRaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
