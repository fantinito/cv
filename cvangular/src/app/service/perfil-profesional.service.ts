import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PerfilProfesionalService {

  constructor(private http:HttpClient) { }
  
  obtenerPerfilProfesional():Observable<any>
  {
    return this.http.get("./assets/perfil-profesional.json");
  
  }
}
