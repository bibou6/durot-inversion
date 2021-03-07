import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdditionalInformationComponent } from './add-additional-information.component';

describe('AddAdditionalInformationComponent', () => {
  let component: AddAdditionalInformationComponent;
  let fixture: ComponentFixture<AddAdditionalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdditionalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdditionalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
