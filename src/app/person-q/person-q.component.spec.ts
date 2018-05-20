import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonQComponent } from './person-q.component';

describe('PersonQComponent', () => {
  let component: PersonQComponent;
  let fixture: ComponentFixture<PersonQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
