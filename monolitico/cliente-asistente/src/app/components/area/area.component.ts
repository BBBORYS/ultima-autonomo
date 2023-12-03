import { Component, OnInit } from '@angular/core';
import { Area } from '../interfaces/area/area';
import { ServicioAsistenciaService } from 'src/app/services/servicio-asistencia.service';
import { Asistente } from '../interfaces/asistente/asistente';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent  implements OnInit{
area: Area = {
  nombre: '',
  asistente: ''
}
areas: any;
asistentes: any;
  constructor(private servicio: ServicioAsistenciaService){}
  ngOnInit(): void {
    this.ver();
}

crear(){
  this.servicio.creararea(this.area).subscribe(
    res=>{
       this.ver();
    }
  )
}



ver(){
  this.servicio.verareas().subscribe(
    res=>{
       this.areas = res
    }
  )
}


eliminar(id: string){
this.servicio.eliminararea(id).subscribe(
  res=>{
     this.ver();
  }
)
}

}
