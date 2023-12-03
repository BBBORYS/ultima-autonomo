import { Injectable } from '@angular/core';
import { Asistente } from '../components/interfaces/asistente/asistente';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MicroservicioBodegaService {
  api: String = 'http://localhost:3001'
  constructor(private http: HttpClient){}

guardar(asis: Asistente){
  return this.http.post(this.api + '/asistente',asis)
}

veralmacenados(){
  return this.http.get(this.api + '/asistente')
}

desaparecer(id: string){
  return this.http.delete(this.api + '/asistente/' +id)
}


}
