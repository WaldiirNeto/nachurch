import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumbAreaReservasComponent } from './breadcumb-area-reservas.component';

describe('BreadcumbAreaReservasComponent', () => {
  let component: BreadcumbAreaReservasComponent;
  let fixture: ComponentFixture<BreadcumbAreaReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcumbAreaReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcumbAreaReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
