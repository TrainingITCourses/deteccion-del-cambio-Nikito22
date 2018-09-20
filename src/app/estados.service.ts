import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs/observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map } from 'rxjs/operators';
=======
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
>>>>>>> f71904de5b173d12ac63f238978c8f37e5577dfc
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
<<<<<<< HEAD
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
=======
export class EstadosService {
    // let result:Array<Task> = [];
    public estados: any;

    constructor(private http: Http) {

        this.estados = this.getJSON().subscribe(data => {
            console.log(data.json().types);
            console.log(this.estados);
            data.json().types;
        }
            , error => console.log(error));
    }

    public getJSON(): Observable<any> {
        return this.http.get('/assets/launchstatus.json');
>>>>>>> f71904de5b173d12ac63f238978c8f37e5577dfc
    }
}
