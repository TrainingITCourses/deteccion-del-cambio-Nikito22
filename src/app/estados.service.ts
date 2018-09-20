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

    constructor(private http: HttpClient) {
        forkJoin(
            this.getJSON('/assets/launchstatus.json'),
            this.getJSON('/assets/launchagencies.json'),
            this.getJSON('/assets/launchmissions.json')
        ).pipe(
            map(([estados, agencias, tiposMisiones]) => {
                let [this.estados, this.agencias, this.tiposMisiones] =[estados, agencias, tiposMisiones];
                console.log(this.estados, this.agencias, this.tiposMisiones);
            })
        );
    }

    private getJSON(jsonFile): Observable<any> {
        return this.http.get(jsonFile)
            .map((res: any) => res.types);
    }
}
