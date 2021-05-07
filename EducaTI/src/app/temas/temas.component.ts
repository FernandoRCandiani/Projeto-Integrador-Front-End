import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  
}
