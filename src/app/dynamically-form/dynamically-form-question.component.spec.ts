import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyFormQuestionComponent } from './dynamically-form-question.component';

describe('DynamicallyFormQuestionComponent', () => {
  let component: DynamicallyFormQuestionComponent;
  let fixture: ComponentFixture<DynamicallyFormQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicallyFormQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicallyFormQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
