import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaLista } from './vaga-lista';

describe('VagaLista', () => {
  let component: VagaLista;
  let fixture: ComponentFixture<VagaLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagaLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagaLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
