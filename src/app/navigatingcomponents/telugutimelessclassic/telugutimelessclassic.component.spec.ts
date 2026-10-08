import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelugutimelessclassicComponent } from './telugutimelessclassic.component';

describe('TelugutimelessclassicComponent', () => {
  let component: TelugutimelessclassicComponent;
  let fixture: ComponentFixture<TelugutimelessclassicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelugutimelessclassicComponent]
    });
    fixture = TestBed.createComponent(TelugutimelessclassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
