import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Temas';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  token = {headers: new HttpHeaders().set('Authorization', environment.token)}

  constructor(
    private http: HttpClient
  ) { }

  getAllTema():Observable<Temas[]>{
    return this.http.get<Temas[]>('http://localhost:8080/tema', this.token)
  }

  getById(id: number): Observable<Temas>{
    return this.http.get<Temas>(`http://localhost:8080/tema/${id}`, this.token)
  }

  getByTitulo(titulo: string): Observable<Temas[]>{
    return this.http.get<Temas[]>(`http://localhost:8080/tema/titulo/${titulo}`, this.token)
  }

  getByTexto(texto: string): Observable<Temas[]>{
    return this.http.get<Temas[]>(`http://localhost:8080/tema/texto/${texto}`, this.token)
  }

  getByNivel(nivel: string): Observable<Temas[]>{
    return this.http.get<Temas[]>(`http://localhost:8080/tema/nivel/${nivel}`, this.token)
  }

  
  postTema(tema: Temas) : Observable<Temas>{
    return this.http.post<Temas>('http://localhost:8080/tema', tema, this.token)
  }

  
  




}

