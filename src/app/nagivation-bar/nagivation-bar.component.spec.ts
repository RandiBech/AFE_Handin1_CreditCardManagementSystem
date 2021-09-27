import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagivationBarComponent } from './nagivation-bar.component';

describe('NagivationBarComponent', () => {
  let component: NagivationBarComponent;
  let fixture: ComponentFixture<NagivationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagivationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NagivationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
