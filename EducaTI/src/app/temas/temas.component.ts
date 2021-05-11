import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Temas';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

    tema: Temas = new Temas()
    listaTemas : Temas[]
    listaInscrito: Temas[]

    usuario: Usuario = new Usuario()
    idUser: number = environment.id
    
    constructor(
      private router: Router,
      private temaService : TemaService,
      private authService: AuthService
    ) {}

  ngOnInit() {
    window.scroll(0,0)

    if (environment.token ==''){
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()
   
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Temas)=> {
      this.tema = resp
      alert ('Parabéns, tema criado com sucesso!')
      this.findAllTemas()
      this.tema = new Temas()
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Temas[])=>{
      this.listaTemas = resp })
  }

  findAllTemasInscrito(){
    
  }

  inscreverUsuario(id: number){
    
    this.authService.inscreverUsuario(this.idUser, id).subscribe((resp: Usuario)=>{
      this.usuario = resp
      this.usuario.temasInscritos[id] = this.tema
      this.tema.usuariosInscritos[this.idUser] = this.usuario
      alert('Tema inscrito com sucesso!')
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
  
}
