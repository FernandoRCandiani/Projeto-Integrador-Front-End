import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Temas } from 'src/app/model/Temas';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-tema',
  templateUrl: './delete-tema.component.html',
  styleUrls: ['./delete-tema.component.css']
})
export class DeleteTemaComponent implements OnInit {
  tema : Temas = new Temas()
  constructor(
    private temaService : TemaService,
    private router : Router,
    private route : ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
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
  deleteTema(){
    this.temaService.deleteTema(this.tema.id).subscribe(()=>{
      this.alertas.showAlertInfo('O tema foi deletado com sucesso.')
      this.router.navigate(['/temas'])
    })
  }
}
