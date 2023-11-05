import { Component } from '@angular/core';
import { EstudiosAcademicosService } from 'src/app/service/estudios-academicos.service';

@Component({
  selector: 'app-estudios-academicos',
  templateUrl: './estudios-academicos.component.html',
  styleUrls: ['./estudios-academicos.component.css']
})
export class EstudiosAcademicosComponent {
  estudiosAcademicos:any;
  constructor(private estudiosAcademicosService:EstudiosAcademicosService)
  {
    this.estudiosAcademicosService.obtenerEstudiosAcademicos().subscribe(
      {
        next: (data)=>{
          this.estudiosAcademicos=data["estudios-academicos"];
          console.log(data);
        },
        error:(err)=>{
          alert("se ha producido un error.Por favor, intente nuevamente");
          console.error(err)
        }
      }
    )
  }
}

