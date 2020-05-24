import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistracoesComponent } from './ministracoes.component';

describe('MinistracoesComponent', () => {
  let component: MinistracoesComponent;
  let fixture: ComponentFixture<MinistracoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistracoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
