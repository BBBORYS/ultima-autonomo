import { Component, OnInit } from '@angular/core';
import { Asistente } from '../interfaces/asistente/asistente';
import { ServicioAsistenciaService } from 'src/app/services/servicio-asistencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-asistente',
  templateUrl: './edit-asistente.component.html',
  styleUrls: ['./edit-asistente.component.css']
})
export class EditAsistenteComponent implements OnInit {
asistencia: Asistente = {
  caracteristicas: '',
  descripcion: '',
  soporte: ''
}
  constructor(private servicio: ServicioAsistenciaService,
    private router: Router,
    private activate: ActivatedRoute
    ){}
  ngOnInit(): void {
    const params = this.activate.snapshot.params;
    if(params){
      this.servicio.verasistente(params['id']).subscribe(
        res  =>{
            this.asistencia = res
        }
      )
    }


}


editar(){
      delete this.asistencia.__v;
      let id = this.asistencia._id;
      delete this.asistencia._id;
      this.servicio.editassitente(id,this.asistencia)
      .subscribe(
      res=> {
      console.log(res);
      this.router.navigate(['/asistente'])
      }
      )
      }
}

