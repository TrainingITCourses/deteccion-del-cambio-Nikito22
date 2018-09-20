import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class APIService {
    public selOpt = { value: '', viewValue: '' };

    public estados;
    public agencias;
    public tiposMisiones;

    public cargado = false;

    constructor(private http: HttpClient) {
        forkJoin([
            this.http.get('/assets/launchstatus.json'),
            this.http.get('/assets/launchagencies.json'),
            this.http.get('/assets/launchmissions.json')
        ]).subscribe(results => {
            this.estados = results[0].types;
            this.agencias = results[1].agencies;
            this.tiposMisiones = results[2].types;
            this.cargado = true;
            console.log('Servicio json cargados', this.estados, this.agencias, this.tiposMisiones);
        });
    }
}