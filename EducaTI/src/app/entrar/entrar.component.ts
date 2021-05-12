import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.authService.entrar(this.usuarioLogin).subscribe(
      (resp:UsuarioLogin) => {
        this.usuarioLogin = resp

        environment.token = this.usuarioLogin.token
        environment.email = this.usuarioLogin.email
        environment.foto = this.usuarioLogin.foto
        environment.nome = this.usuarioLogin.nome
        environment.id = this.usuarioLogin.id
        

        this.router.navigate(['/posts'])
      }, erro=>{
        if(erro.status == 500){
          this.alertas.showAlertDanger('Email ou senha inválidos! Favor verificar')
        }
      }
    )
  }

}
