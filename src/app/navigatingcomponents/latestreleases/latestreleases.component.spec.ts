import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestreleasesComponent } from './latestreleases.component';

describe('LatestreleasesComponent', () => {
  let component: LatestreleasesComponent;
  let fixture: ComponentFixture<LatestreleasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestreleasesComponent]
    });
    fixture = TestBed.createComponent(LatestreleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
