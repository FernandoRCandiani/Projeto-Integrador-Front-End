import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  foto = environment.foto

  constructor( 
       
    private router: Router

  ) { }



  ngOnInit() {
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = '',
    environment.nome = '',
    environment.id = 0,
    environment.foto = '',
    environment.email =''
  }
}
