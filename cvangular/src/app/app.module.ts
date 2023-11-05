import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PerfilProfesionalComponent } from './cv/perfil-profesional/perfil-profesional.component';
import { HabilidadesComponent } from './cv/habilidades/habilidades.component';
import { ExperienciaLaboralComponent } from './cv/experiencia-laboral/experiencia-laboral.component';
import { EstudiosAcademicosComponent } from './cv/estudios-academicos/estudios-academicos.component';
import { ProyectosComponent } from './cv/proyectos/proyectos.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilProfesionalComponent,
    HabilidadesComponent,
    EstudiosAcademicosComponent,
    ProyectosComponent,
    ExperienciaLaboralComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
