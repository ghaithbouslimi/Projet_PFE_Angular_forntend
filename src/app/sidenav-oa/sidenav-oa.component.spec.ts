import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavOAComponent } from './sidenav-oa.component';

describe('SidenavOAComponent', () => {
  let component: SidenavOAComponent;
  let fixture: ComponentFixture<SidenavOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavOAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
