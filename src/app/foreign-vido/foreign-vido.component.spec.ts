import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignVIDOComponent } from './foreign-vido.component';

describe('ForeignVIDOComponent', () => {
  let component: ForeignVIDOComponent;
  let fixture: ComponentFixture<ForeignVIDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignVIDOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignVIDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
