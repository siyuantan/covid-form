import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecordsPageComponent } from './view-records-page.component';

describe('ViewRecordsPageComponent', () => {
  let component: ViewRecordsPageComponent;
  let fixture: ComponentFixture<ViewRecordsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRecordsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecordsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
