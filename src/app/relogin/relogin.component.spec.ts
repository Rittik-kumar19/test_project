import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloginComponent } from './relogin.component';

describe('ReloginComponent', () => {
  let component: ReloginComponent;
  let fixture: ComponentFixture<ReloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
