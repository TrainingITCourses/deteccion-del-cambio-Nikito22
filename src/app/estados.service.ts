import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EstadosService {

    constructor(private http: Http) {
        var obj;
        this.getJSON().subscribe(data => obj = data, error => console.log(error));
   }

   public getJSON(): Observable<any> {
        return this.http.get('/assets/launchstatus.json')
                        .map((res: any) => res.json());

    }
}