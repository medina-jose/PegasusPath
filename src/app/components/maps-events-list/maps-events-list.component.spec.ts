import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsEventsListComponent } from './maps-events-list.component';

describe('MapsEventsListComponent', () => {
  let component: MapsEventsListComponent;
  let fixture: ComponentFixture<MapsEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsEventsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
