import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLibsComponent } from './text-libs.component';

describe('TextLibsComponent', () => {
  let component: TextLibsComponent;
  let fixture: ComponentFixture<TextLibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLibsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
