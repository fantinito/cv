import { Component } from '@angular/core';
import { PerfilProfesionalService } from 'src/app/service/perfil-profesional.service';

@Component({
  selector: 'app-perfil-profesional',
  templateUrl: './perfil-profesional.component.html',
  styleUrls: ['./perfil-profesional.component.css']
})
export class PerfilProfesionalComponent {
  perfilProfesional:any;
  constructor(private perfilProfesionalService:PerfilProfesionalService)
  {
    this.perfilProfesionalService.obtenerPerfilProfesional().subscribe(
      {
        next: (data)=>{
          this.perfilProfesional=data["perfil-profesional"];
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
