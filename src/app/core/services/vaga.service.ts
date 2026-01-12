import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  private apiUrl = 'http://localhost:8080/vagas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Vaga> {
    return this.http.get<Vaga>(`${this.apiUrl}/${id}`);
  }

  criar(vaga: Vaga): Observable<Vaga> {
    return this.http.post<Vaga>(this.apiUrl, vaga);
  }

  atualizar(id: number, vaga: Vaga): Observable<Vaga> {
    return this.http.put<Vaga>(`${this.apiUrl}/${id}`, vaga);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}