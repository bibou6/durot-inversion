import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplePictureComponentComponent } from './multiple-picture-component.component';

describe('MultiplePictureComponentComponent', () => {
  let component: MultiplePictureComponentComponent;
  let fixture: ComponentFixture<MultiplePictureComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplePictureComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplePictureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
