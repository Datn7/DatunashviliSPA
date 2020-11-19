import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShpComponent } from './shp.component';

describe('ShpComponent', () => {
  let component: ShpComponent;
  let fixture: ComponentFixture<ShpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
