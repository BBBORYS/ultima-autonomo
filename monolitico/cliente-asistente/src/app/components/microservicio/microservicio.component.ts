import { Component, OnInit } from '@angular/core';
import { MicroservicioBodegaService } from 'src/app/services/microservicio-bodega.service';
import { Asistente } from '../interfaces/asistente/asistente';
import { ServicioAsistenciaService } from 'src/app/services/servicio-asistencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-microservicio',
  templateUrl: './microservicio.component.html',
  styleUrls: ['./microservicio.component.css']
})
export class MicroservicioComponent implements OnInit {

asistencia: Asistente = {
  caracteristicas: '',
  descripcion: '',
  soporte: ''
}

   asistentes: any;

  constructor(private microservicio: MicroservicioBodegaService,
    private servicio: ServicioAsistenciaService,
    private router: Router
    ){}
  ngOnInit(): void {
    this.ver()
}

crear(id: string,caracteristicas: string, descripcion: string, soporte: string){
let regresa = this.asistencia = {
  caracteristicas: caracteristicas,
  descripcion: descripcion,
  soporte: soporte
}

this.servicio.crearasistente(regresa).subscribe(
  res=>{
    alert('Salida de equipo de la bodega')
    this.router.navigate(['/asistente'])
  }
)

this.microservicio.desaparecer(id).subscribe(
  res=>{
    this.ver();
  }
)

}

ver(){
  this.microservicio.veralmacenados().subscribe(
    res=>{
       this.asistentes = res;    
    }
  )
}

eliminar(id: string){
this.microservicio.desaparecer(id).subscribe(
  res=>{
    alert('Se destruyo el equipo')
    this.ver();
  }
)
}


}
