import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumbAreaMinistracoesComponent } from './breadcumb-area-ministracoes.component';

describe('BreadcumbAreaMinistracoesComponent', () => {
  let component: BreadcumbAreaMinistracoesComponent;
  let fixture: ComponentFixture<BreadcumbAreaMinistracoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcumbAreaMinistracoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcumbAreaMinistracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
