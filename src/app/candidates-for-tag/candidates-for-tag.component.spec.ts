import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesForTagComponent } from './candidates-for-tag.component';

describe('CandidatesForTagComponent', () => {
  let component: CandidatesForTagComponent;
  let fixture: ComponentFixture<CandidatesForTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesForTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesForTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
