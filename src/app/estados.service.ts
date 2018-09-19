import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
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
    }
}
