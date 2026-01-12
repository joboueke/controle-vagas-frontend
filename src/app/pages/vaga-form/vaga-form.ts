import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from '../../core/models/vaga.model';
import { VagaService } from '../../core/services/vaga.service';

@Component({
  selector: 'app-vaga-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vaga-form.html',
  styleUrls: ['./vaga-form.css']
})
export class VagaForm {

  id?: number;

  vaga: Vaga = {
    empresa: '',
    cargo: '',
    status: '',
    observacoes: ''
  };

  constructor(
    private vagaService: VagaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  salvar(): void {

  if (this.id) {
    // EDITAR
    this.vagaService.atualizar(this.id, this.vaga).subscribe({
      next: () => {
        window.location.href = '/vagas';
      },
      error: (erro) => {
        console.error('Erro ao atualizar vaga', erro);
      }
    });

  } else {
    // CRIAR
    this.vagaService.criar(this.vaga).subscribe({
      next: () => {
        window.location.href = '/vagas';
      },
      error: (erro) => {
        console.error('Erro ao criar vaga', erro);
      }
    });
  }
}
  ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get('id');

  if (idParam) {
    this.id = Number(idParam);

    this.vagaService.buscarPorId(this.id).subscribe({
      next: (vaga) => {
        this.vaga = vaga;
      },
      error: (erro) => {
        console.error('Erro ao carregar vaga', erro);
      }
    });
  }
}
}