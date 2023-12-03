import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Asistente } from '../components/interfaces/asistente/asistente';
import {Observable} from 'rxjs'
import { Area } from '../components/interfaces/area/area';

@Injectable({
  providedIn: 'root'
})
export class ServicioAsistenciaService {
  api: String = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

crearasistente(asis: Asistente): Observable<Asistente>{
  return this.http.post<Asistente>(this.api + '/asistente',asis)
}

verasistentes(){
  return this.http.get(this.api + '/asistente')
}

eliminarasistente(id: string){
  return this.http.delete(this.api + '/asistente/' +id)
}

verasistente(id: string): Observable<Asistente>{
  return this.http.get<Asistente>(this.api + '/asistente/' +id)
}


editassitente(id: String, asistente: Asistente): Observable<Asistente> {
  return this.http.put<Asistente>(`${this.api}/asistente/${id}`, asistente);
}


//areas
creararea(area: Area): Observable<Area>{
  return this.http.post<Area>(this.api + '/area',area)
}

verareas(){
  return this.http.get(this.api + '/area')
}

eliminararea(id: string){
  return this.http.delete(this.api + '/area/' +id)
}

verarea(id: string): Observable<Area>{
  return this.http.get<Area>(this.api + '/area/' +id)
}


editarea(id: String, area: Area): Observable<Area> {
  return this.http.put<Area>(`${this.api}/area/${id}`, area);
}




}
