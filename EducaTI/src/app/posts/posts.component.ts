import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Posts } from '../model/Posts';
import { Temas } from '../model/Temas';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostsService } from '../service/posts.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']

})

export class PostsComponent implements OnInit {

  nome = environment.nome
  idUsuario = environment.id

  tema: Temas = new Temas()
  listaTemas: Temas[]
  idTema: number

  posts: Posts = new Posts()
  usuario: Usuario = new Usuario()
  listaPosts: Posts[]


  constructor(
    private router: Router,
    private postsService: PostsService,
    private alertas: AlertasService,
    private authService: AuthService,
    private temasService: TemaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.findAllPosts()
    this.findAllTemas()
  }

  findAllTemas(){
    this.temasService.getAllTema().subscribe((resp: Temas[])=>{
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temasService.getById(this.idTema).subscribe((resp: Temas) =>{
      this.tema = resp
    })
  }

  cadastrar() {
    this.tema.id = this.idTema
    this.posts.temas = this.tema

    this.usuario.id = this.idUsuario
    this.posts.usuarioCriador = this.usuario
  
    this.postsService.postPosts(this.posts).subscribe((resp: Posts) => {
      this.posts = resp
      this.alertas.showAlertSuccess('Post criado com sucesso!')
      this.findAllPosts()
      this.posts = new Posts()
    })
  }

  findAllPosts() {
    this.postsService.getAllPosts().subscribe((resp: Posts[]) => {
      this.listaPosts = resp
    })
  }

  findByIdUsuario(){
    this.authService.encontrar(this.idUsuario).subscribe((resp: Usuario) =>{
      this.usuario = resp
    })
  }

}

