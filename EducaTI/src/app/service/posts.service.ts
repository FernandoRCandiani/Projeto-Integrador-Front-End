import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Posts } from '../model/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  token = {
    headers: new HttpHeaders().set('Authorization' , environment.token)
  }
  
  constructor(
    private http: HttpClient
  ){ }

  getAllPosts(): Observable<Posts[]>{
    return this.http.get<Posts[]>('http://localhost:8080/post' , this.token)
  }

  getByIdPosts(idPosts: number): Observable<Posts>{
    return this.http.get<Posts>(`http://localhost:8080/post/${idPosts}`, this.token)
  }

  getByTitulo(tituloPosts: string): Observable<Posts[]>{
    return this.http.get<Posts[]>(`http://localhost:8080/post/titulo/${tituloPosts}`, this.token)
  }

  getByTexto(textoPosts: string): Observable<Posts[]>{
    return this.http.get<Posts[]>(`http://localhost:8080/post/texto/${textoPosts}`, this.token)
  }

  postPosts(posts: Posts): Observable<Posts>{
    return this.http.post<Posts>('http://localhost:8080/post', posts, this.token)
  }

}
