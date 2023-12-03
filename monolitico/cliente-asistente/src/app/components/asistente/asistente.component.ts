import { Component, OnInit } from '@angular/core';
import { ServicioAsistenciaService } from 'src/app/services/servicio-asistencia.service';
import { Asistente } from '../interfaces/asistente/asistente';
import { MicroservicioBodegaService } from 'src/app/services/microservicio-bodega.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.component.html',
  styleUrls: ['./asistente.component.css']
})
export class AsistenteComponent implements OnInit {
asistencias: any;

asistencia: Asistente = {
  caracteristicas: '',
  descripcion: '',
  soporte: ''
}

constructor(private servicio: ServicioAsistenciaService,
  private microservicio: MicroservicioBodegaService, 
  private router: Router
  ){}

ngOnInit(): void {
    this.ver()
}


crear(){
  this.servicio.crearasistente(this.asistencia).subscribe(
    res =>{
     this.ver();
    }
  )
}


ver(){
  this.servicio.verasistentes().subscribe(
    res =>{
        this.asistencias = res;
    }
  )
}


eliminar(id: string, caracteristicas: string, descripcion:string,
  soporte: string
  ){
    let envia = this.asistencia = {
      caracteristicas: caracteristicas,
      descripcion: descripcion,
      soporte: soporte
    }
  this.servicio.eliminarasistente(id).subscribe(
    res =>{
    }
  )

  this.microservicio.guardar(envia).subscribe(
    res=>{
      alert('Se procedio a guardar en la bodega')
       this.ver();
       this.router.navigate(['/micro'])
    }
  )
}


}
