import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NjBuscadorComponent } from './nj-buscador/nj-buscador.component';
import { APIService } from './api.service';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

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
