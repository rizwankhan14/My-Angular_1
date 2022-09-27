import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardealsComponent } from './cardeals.component';

describe('CardealsComponent', () => {
  let component: CardealsComponent;
  let fixture: ComponentFixture<CardealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
