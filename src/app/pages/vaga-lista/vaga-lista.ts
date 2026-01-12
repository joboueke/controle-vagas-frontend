import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagaService } from '../../core/services/vaga.service';
import { Vaga } from '../../core/models/vaga.model';
import { RouterLink } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-vaga-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vaga-lista.html',
  styleUrls: ['./vaga-lista.css']
})
export class VagaLista implements OnInit {

  vagas: Vaga[] = [];

  constructor(private vagaService: VagaService, private router: Router) {}

  ngOnInit(): void {
  this.carregarVagas();

  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.carregarVagas();
    });
}

  carregarVagas(): void {
    this.vagaService.listar().subscribe({
      next: (dados) => {
        this.vagas = dados;
      },
      error: (erro) => {
        console.error('Erro ao carregar vagas', erro);
      }
    });
  }

  excluir(id: number): void {
  const confirmacao = confirm('Tem certeza que deseja excluir esta vaga?');

  if (!confirmacao) {
    return;
  }

  this.vagaService.deletar(id).subscribe({
    next: () => {
      this.carregarVagas(); // atualiza a lista
    },
    error: (erro) => {
      console.error('Erro ao excluir vaga', erro);
    }
  });
}
}