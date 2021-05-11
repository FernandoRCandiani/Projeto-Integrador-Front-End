import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number
  confirmarSenha: string
  tipoUsuario: string

  foto = environment.foto

  constructor( 

    private authService: AuthService,
    private route: ActivatedRoute,       
    private router: Router

  ) { }

  ngOnInit() {

    window.scroll(0,0)
    
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.taget.value
  }

  atualizar(){
    if(this.usuario.senha != this.confirmarSenha){
      alert('Senhas estão incorretas')
    }else{
      this.authService.atualizar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario = resp
        
        alert('Usuario atualizado com sucesso, faça o login novamente.')

        environment.token = '',
        environment.nome = '',
        environment.id = 0,
        environment.foto = '',
        environment.email =''

        this.router.navigate(['/entrar'])
      })
    }
  }
  

  findByIdUsuario(id: number){
    this.authService.encontrar(id).subscribe((resp: Usuario) =>{
      this.usuario = resp
    })
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
