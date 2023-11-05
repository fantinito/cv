import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EstudiosAcademicosService {

  constructor(private http:HttpClient) { }
  
  obtenerEstudiosAcademicos():Observable<any>
  {
    return this.http.get("./assets/estudios-academicos.json");
  
  }
    
}
