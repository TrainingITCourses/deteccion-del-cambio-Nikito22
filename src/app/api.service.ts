import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';


@Injectable()
export class APIService {
    public selOpt = { value: '', viewValue: '' };

    private estados: Array<any>;
    private agencias: Array<any>;
    private tiposMisiones: Array<any>;
    postfilter: any;
    posts: any;


    constructor(private http: HttpClient) {
        // Este modo empieza a 'cachear' los arrays de estados, agencias y tipos de misión nada más arrancar la aplicación.

        // Las lecturas de los json ya dejan un array de value y viewValue para pasar directo al select
        this.http.get('/assets/launchstatus.json').subscribe((res: any) =>
            this.estados = res.types.map(d => ({ value: d.id, viewValue: d.id + ' - ' + d.description + ' (' + d.name + ')' }))
        );
        this.http.get('/assets/launchagencies.json').subscribe((res: any) =>
            this.agencias = res.agencies.map(d => ({ value: d.id, viewValue: d.id + ' - ' + d.name }))
        );
        this.http.get('/assets/launchmissions.json').subscribe((res: any) =>
            this.tiposMisiones = res.types.map(d => ({ value: d.id, viewValue: d.id + ' - ' + d.name }))
        );

        // Esta modo no activava el interface al usuario hasta tener cargados todos los json, 
        // me parece muy exagerado como metodo para  llamadas API más lentas que este sencillo json local.
        // forkJoin([
        //     this.http.get('/assets/launchstatus.json'),
        //     this.http.get('/assets/launchagencies.json'),
        //     this.http.get('/assets/launchmissions.json'),
        //     this.http.get('/assets/launchlibrary.json')
        // ]).pipe(delay(200)).subscribe(results => {
        //     this.estados = results[0].types.map(d => ({
        //         id: d.id, viewValue: d.id + ' - ' + d.description + ' (' + d.name + ')'
        //     }));
        //     this.agencias = results[1].agencies.map(d => ({
        //         id: d.id, viewValue: d.id + ' - ' + d.name
        //     }));
        //     this.tiposMisiones = results[2].types.map(d => ({
        //         id: d.id, viewValue: d.id + ' - ' + d.name
        //     }));
        //     this.lanzamientos = results[3].launches;
        //     this.cargado = true;
        //     // Imitamos una cierta demora con delay(xxx)
        //     console.log('Servicio json cargados');
        //     });
    }

    public getLaunchs(): Observable<any> {
        return this.http.get('/assets/launchlibrary.json');
    }
}
