import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Temas';
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
    
    constructor(
      private router: Router,
      private temaService : TemaService
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

  inscreverUsuario(id: number){
    
    this.temaService.inscreverUsuario(environment.id, id).subscribe((resp: Temas[])=>{
      this.listaInscrito = resp 
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
