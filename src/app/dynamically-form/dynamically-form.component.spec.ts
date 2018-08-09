import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyFormComponent } from './dynamically-form.component';

describe('DynamicallyFormComponent', () => {
  let component: DynamicallyFormComponent;
  let fixture: ComponentFixture<DynamicallyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicallyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicallyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
