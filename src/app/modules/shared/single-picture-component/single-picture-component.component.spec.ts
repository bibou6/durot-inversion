import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePictureComponentComponent } from './single-picture-component.component';

describe('SinglePictureComponentComponent', () => {
  let component: SinglePictureComponentComponent;
  let fixture: ComponentFixture<SinglePictureComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePictureComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePictureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
