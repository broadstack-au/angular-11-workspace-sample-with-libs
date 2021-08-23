import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLibsComponent } from './ui-libs.component';

describe('UiLibsComponent', () => {
  let component: UiLibsComponent;
  let fixture: ComponentFixture<UiLibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLibsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
