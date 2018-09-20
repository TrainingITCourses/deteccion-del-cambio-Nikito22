import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class APIService {
    public selOpt = { value: '', viewValue: '' };

    public estados;
    public agencias;
    public tiposMisiones;

    public cargado = false;

    constructor(private http: HttpClient) {
        forkJoin(
            this.getJSON('/assets/launchstatus.json'),
            this.getJSON('/assets/launchagencies.json'),
            this.getJSON('/assets/launchmissions.json')
        ).pipe(
            map(([estados, agencias, tiposMisiones]) => {
                this.estados = estados;
                this.agencias = agencias;
                this.tiposMisiones = tiposMisiones;
                this.cargado = true;
                console.log('Servicio json cargados', this.estados, this.agencias, this.tiposMisiones);
            })
        );
    }

    private getJSON(jsonFile): Observable<any> {
        return this.http.get(jsonFile)
            .map((res: any) => res.types);
    }
}
