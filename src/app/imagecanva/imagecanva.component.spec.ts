import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecanvaComponent } from './imagecanva.component';

describe('ImagecanvaComponent', () => {
  let component: ImagecanvaComponent;
  let fixture: ComponentFixture<ImagecanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagecanvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagecanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
