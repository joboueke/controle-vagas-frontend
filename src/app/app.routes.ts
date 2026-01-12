import { Routes } from '@angular/router';
import { VagaLista } from './pages/vaga-lista/vaga-lista';
import { VagaForm } from './pages/vaga-form/vaga-form';



export const routes: Routes = [
  { path: '', redirectTo: 'vagas', pathMatch: 'full' },
  { path: 'vagas', component: VagaLista },
  { path: 'vagas/nova', component: VagaForm },
  { path: 'vagas/editar/:id', component: VagaForm }

];

