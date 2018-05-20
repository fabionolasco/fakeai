import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerQComponent } from './computer-q.component';

describe('ComputerQComponent', () => {
  let component: ComputerQComponent;
  let fixture: ComponentFixture<ComputerQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
