import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


    constructor(
      private http: HttpClient ) {}

      token = {headers: new HttpHeaders().set('Authorization', environment.token)}

      entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
        return this.http.post<UsuarioLogin>("http://localhost:8080/usuario/login", usuarioLogin)
    
    
    
      }
      cadastrar(usuario: Usuario) :Observable<Usuario>{
        return this.http.post<Usuario>("http://localhost:8080/usuario/cadastrar", usuario)
      }

      inscreverUsuario(idTema: number, idUser: number): Observable<Usuario>{
        return this.http.post<Usuario>(`http://localhost:8080/usuario/inscricao/${idTema}/${idUser}`, this.token)
      }

      encontrar(idUser: number): Observable<Usuario>{
        return this.http.get<Usuario>(`http://localhost:8080/usuario/${idUser}`, this.token)
      }

      atualizar(usuario: Usuario) :Observable<Usuario>{
        return this.http.put<Usuario>("http://localhost:8080/usuario", usuario, this.token)
      }
    
      logado(){
    
        let ok: boolean = false
    
        if(environment.token != ""){
          ok=true
        }
    
        return ok
      }

    
}
