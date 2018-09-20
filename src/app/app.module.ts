import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NjBuscadorComponent } from './nj-buscador/nj-buscador.component';
import { APIService } from './estados.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NjBuscadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
