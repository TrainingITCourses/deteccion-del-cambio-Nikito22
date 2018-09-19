import { EstadosService } from './estados.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NjBuscadorComponent } from './nj-buscador/nj-buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NjBuscadorComponent
  ],
  imports: [
    BrowserModule,
    EstadosService
  ],
  exports: [EstadosService],
  providers: [EstadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
