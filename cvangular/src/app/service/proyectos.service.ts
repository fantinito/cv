import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http:HttpClient) { }
  
  obtenerProyectos():Observable<any>
  {
    return this.http.get("./assets/proyectos.json");
  
  }
}
