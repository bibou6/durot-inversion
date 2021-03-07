import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityBasicInfoComponent } from './city-basic-info.component';

describe('CityBasicInfoComponent', () => {
  let component: CityBasicInfoComponent;
  let fixture: ComponentFixture<CityBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
