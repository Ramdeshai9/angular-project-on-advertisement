import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TharComponent } from './thar.component';

describe('TharComponent', () => {
  let component: TharComponent;
  let fixture: ComponentFixture<TharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
