import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Posts } from '../model/Posts';
import { Temas } from '../model/Temas';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostsService } from '../service/posts.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {
  
    nome = environment.nome
    idUsuario = environment.id
   
    tema: Temas = new Temas()
    listaTemas : Temas[]
    idTema: number

    posts: Posts = new Posts()
    listaPosts: Posts[]

    
    listaUsuarios : Usuario []
    usuario: Usuario = new Usuario()
    idUser: number = environment.id
    
    constructor(
      private router: Router,
      private temaService : TemaService,
      private authService: AuthService,
      private alertas: AlertasService,
      private postsService: PostsService

    ) {}

  ngOnInit() {
       if (environment.token ==''){
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()
    this.getAllTema()
   
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Temas)=> {
      this.tema = resp
      this.alertas.showAlertSuccess('Parabéns, tema criado com sucesso!')
      this.findAllTemas()
      this.tema = new Temas()
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUser(this.idUser).subscribe((resp : Usuario) =>{
      this.usuario = resp
    })

  }

  getAllTema(){
    this.temaService.getAllTema().subscribe((resp : Temas[]) =>{
      this.listaTemas = resp
    })
  }

  findAllPosts() {
    this.postsService.getAllPosts().subscribe((resp: Posts[]) => {
      this.listaPosts = resp
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Temas[])=>{
      this.listaTemas = resp })
  }

   inscreverUsuario(id: number){
    
    this.authService.inscreverUsuario(this.idUser, id).subscribe((resp: Usuario)=>{
      this.usuario = resp
      this.alertas.showAlertSuccess('Tema inscrito com sucesso!')
      this.router.navigate(['/temas'])
    })
  }

  pesquisar(titulo: string){

    this.temaService.getByTitulo(titulo).subscribe((resp: Temas[])=>{
      this.listaTemas = resp
      this.router.navigate(['/temas'])
    })

  }

  pesquisarDescricao(desc: string){
    this.temaService.getByTexto(desc).subscribe((resp: Temas[])=>{
      this.listaTemas = resp
      this.router.navigate(['/temas'])
    })
  }



  publicar() {
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
  
  
}
