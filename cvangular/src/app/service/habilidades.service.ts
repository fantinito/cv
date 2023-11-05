import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor(private http:HttpClient) { }
  
  obtenerHabilidad():Observable<any>
  {
    return this.http.get("./assets/habilidades.json");
  
  }
}
