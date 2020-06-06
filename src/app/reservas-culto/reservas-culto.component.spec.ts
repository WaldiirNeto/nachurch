import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasCultoComponent } from './reservas-culto.component';

describe('ReservasCultoComponent', () => {
  let component: ReservasCultoComponent;
  let fixture: ComponentFixture<ReservasCultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasCultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasCultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
