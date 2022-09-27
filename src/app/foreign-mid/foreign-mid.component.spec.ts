import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignMIDComponent } from './foreign-mid.component';

describe('ForeignMIDComponent', () => {
  let component: ForeignMIDComponent;
  let fixture: ComponentFixture<ForeignMIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignMIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignMIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
