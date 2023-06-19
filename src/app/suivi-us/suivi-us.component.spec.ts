import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviUSComponent } from './suivi-us.component';

describe('SuiviUSComponent', () => {
  let component: SuiviUSComponent;
  let fixture: ComponentFixture<SuiviUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviUSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
