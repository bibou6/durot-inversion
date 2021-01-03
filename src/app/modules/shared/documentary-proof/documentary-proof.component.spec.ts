import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaryProofComponent } from './documentary-proof.component';

describe('DocumentaryProofComponent', () => {
  let component: DocumentaryProofComponent;
  let fixture: ComponentFixture<DocumentaryProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentaryProofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentaryProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
