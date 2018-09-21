import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';


@Injectable()
export class APIService {
    public selOpt = { value: '', viewValue: '' };

    public estados: Array<any>;
    public agencias: Array<any>;
    public tiposMisiones: Array<any>;
    public lanzamientos: Array<any>;

    public cargado = false;

    constructor(private http: HttpClient) {
        forkJoin([
            this.http.get('/assets/launchstatus.json'),
            this.http.get('/assets/launchagencies.json'),
            this.http.get('/assets/launchmissions.json'),
            this.http.get('/assets/launchlibrary.json')
        ]).pipe(delay(200)).subscribe(results => {
            this.estados = results[0].types.map(d => ({
                id: d.id, viewValue: d.id + ' - ' + d.description + ' (' + d.name + ')'
            }));
            this.agencias = results[1].agencies.map(d => ({
                id: d.id, viewValue: d.id + ' - ' + d.name
            }));
            this.tiposMisiones = results[2].types.map(d => ({
                id: d.id, viewValue: d.id + ' - ' + d.name
            }));
            this.lanzamientos = results[3].launches;
            this.cargado = true;
            // Imitamos una cierta demora
            console.log('Servicio json cargados', this.estados, this.agencias, this.tiposMisiones);
        });
    }
}