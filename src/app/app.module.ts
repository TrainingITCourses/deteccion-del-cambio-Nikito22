import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { EstadosService } from './estados.service';
import { NjBuscadorComponent } from 'app/nj-buscador/nj-buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NjBuscadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  exports: [],
  providers: [EstadosService],

  bootstrap: [AppComponent]
})
export class AppModule { }
