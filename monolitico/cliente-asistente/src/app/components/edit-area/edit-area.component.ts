import { Component, OnInit } from '@angular/core';
import { Area } from '../interfaces/area/area';
import { ServicioAsistenciaService } from 'src/app/services/servicio-asistencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css']
})
export class EditAreaComponent implements OnInit {
  area: Area= {
     nombre: '',
     asistente: ''
  }
    constructor(private servicio: ServicioAsistenciaService,
      private router: Router,
      private activate: ActivatedRoute
      ){}
    ngOnInit(): void {
      const params = this.activate.snapshot.params;
      if(params){
        this.servicio.verarea(params['id']).subscribe(
          res  =>{
              this.area = res
          }
        )
      }
  
  
  }
  
  
  editar(){
        delete this.area.__v;
        let id = this.area._id;
        delete this.area._id;
        this.servicio.editarea(id,this.area)
        .subscribe(
        res=> {
        console.log(res);
        this.router.navigate(['/area'])
        }
        )
        }
}
