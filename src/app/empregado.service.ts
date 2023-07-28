import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empregado } from './empregado';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

  private baseURL = "http://localhost:8080/fiap/api/v1/empregados";

  constructor(private httpClient: HttpClient) { }
  
  getEmpregadosList(): Observable<Empregado[]>{
    return this.httpClient.get<Empregado[]>(`${this.baseURL}`);
  }

  createEmpregado(empregado: Empregado): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, empregado);
  }

  getEmpregadoById(id: number): Observable<Empregado>{
    return this.httpClient.get<Empregado>(`${this.baseURL}/${id}`);
  }

  updateEmpregado(id: number, empregado: Empregado): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, empregado);
  }

  deleteEmpregado(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}