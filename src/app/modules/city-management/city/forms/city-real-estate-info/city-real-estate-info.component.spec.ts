import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityRealEstateInfoComponent } from './city-real-estate-info.component';

describe('CityRealEstateInfoComponent', () => {
  let component: CityRealEstateInfoComponent;
  let fixture: ComponentFixture<CityRealEstateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityRealEstateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityRealEstateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
