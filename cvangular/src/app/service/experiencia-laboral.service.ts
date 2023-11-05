import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {

  constructor(private http:HttpClient) { }
  
  obtenerExperienciaLaboral():Observable<any>
  {
    return this.http.get("./assets/experiencia-laboral.json");
  
  }
}
