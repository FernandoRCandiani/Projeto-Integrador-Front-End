import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number
  confirmaSenha:string

  foto = environment.foto

  constructor( 

    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService  
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    } 

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUser(this.idUsuario)
  }

  cSenha(event: any){
    this.confirmaSenha = event.target.value
  }

  atualizar(){
    if(this.usuario.senha != this.confirmaSenha){
      this.alertas.showAlertDanger('Senhas estão incorretas')
    }else{
      this.authService.atualizar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario = resp
        
        this.alertas.showAlertSuccess('Parabéns, usuario atualizado com sucesso')
      
        environment.token = '',
        environment.nome = '',
        environment.id = 0,
        environment.foto = '',
        environment.email =''

        this.router.navigate(['/entrar'])
      
      })
    }
  }

  findByIdUser(id: number){
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
