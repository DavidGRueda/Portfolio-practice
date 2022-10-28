import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatWorksComponent } from './feat-works.component';

describe('FeatWorksComponent', () => {
  let component: FeatWorksComponent;
  let fixture: ComponentFixture<FeatWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
