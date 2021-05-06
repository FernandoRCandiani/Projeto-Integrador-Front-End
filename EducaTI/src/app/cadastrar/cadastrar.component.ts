import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
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
     private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  cSenha(event:any){
    this.confirmaSenha = event.target.value
  }

  cadastrar(){
    if(this.usuario.senha != this.confirmaSenha){
      alert('Senhas estão incorretas')
    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert('Parabéns, usuario cadastrado com sucesso')
      })
    }
  }
}
