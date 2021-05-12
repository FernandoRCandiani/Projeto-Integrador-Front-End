import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Temas } from 'src/app/model/Temas';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-editar-tema',
  templateUrl: './editar-tema.component.html',
  styleUrls: ['./editar-tema.component.css']
})
export class EditarTemaComponent implements OnInit {

  tema : Temas = new Temas()

  constructor(
    private temaService : TemaService,
    private router : Router,
    private route : ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if (environment.token ==''){
      this.router.navigate(['/entrar'])
    }
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }
  findById(id:number){
    this.temaService.getById(id).subscribe((resp:Temas)=>{
      this.tema = resp
    })
  }
  updateTema(){
    this.temaService.putTema(this.tema).subscribe((resp:Temas)=>{
      this.tema = resp
      this.alertas.showAlertInfo('O tema foi atualizado com sucesso.')
      this.router.navigate(['/temas'])
    })
  }
}
