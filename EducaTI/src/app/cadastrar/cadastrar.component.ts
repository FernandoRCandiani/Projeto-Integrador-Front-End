import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmaSenha: string
  email: string

   constructor(
     private authService: AuthService, 
     private router: Router,
     private alertas: AlertasService
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  cSenha(event:any){
    this.confirmaSenha = event.target.value
  }

  cadastrar(){
    if(this.usuario.nome == ''){
      this.alertas.showAlertDanger('Está faltando seu nome')
    }
    if(this.usuario.email == ''){
      this.alertas.showAlertDanger('Está faltando seu E-mail')
    }
    

    if(this.usuario.senha != this.confirmaSenha){
      this.alertas.showAlertDanger('Senhas estão incorretas')
    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario = resp
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Parabéns, usuario cadastrado com sucesso')
      })
    }
  }
}
