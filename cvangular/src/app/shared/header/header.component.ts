import { Component } from '@angular/core';
import { DatosPersonalesService } from 'src/app/service/datos-personales.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
datosPersonales:any;
constructor(private datosPersonalesService:DatosPersonalesService)
{
  this.datosPersonalesService.obtenerDatosPersonales().subscribe(
    {
      next: (data)=>{
        this.datosPersonales=data["datos-personales"];
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

