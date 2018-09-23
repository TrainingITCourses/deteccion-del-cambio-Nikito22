import { AppComponent } from './app.component';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface Iselopt {
    value: string;
    viewValue: string;
}
export interface Ilanzamiento {
    id: number;
    name: string;
    status: number;
    lsp: string;
    missionId: string; // Lost in launchlibrary json simplification
}
@Injectable()
export class APIService implements OnInit {
    public estados: Array<Iselopt>;
    public agencias: Array<Iselopt>;
    public tiposMision: Array<Iselopt>;
    public lanzamientos: Array<Ilanzamiento>;
    public cargado: boolean;


    constructor(private http: HttpClient) {

        // Esta modo no activa el interface al usuario hasta tener cargados todos los json, 
        // Las lecturas de los json ya dejan un array de value y viewValue para pasar directo al select
        // me parece muy exagerado como metodo para  llamadas API más lentas que este sencillo json local.
        forkJoin([
            this.http.get('/assets/launchstatus.json'),
            this.http.get('/assets/launchagencies.json'),
            this.http.get('/assets/launchmissions.json'),
            this.http.get('/assets/launchlibrary.json')
        ]).pipe(delay(200)).subscribe(results => {
            this.estados = results[0].types.map(d => ({
                value: d.id, viewValue: d.id + ' - ' + d.description + ' (' + d.name + ')'
            }));
            this.agencias = results[1].agencies.map(d => ({
                value: d.id, viewValue: d.id + ' - ' + d.name
            }));
            this.tiposMision = results[2].types.map(d => ({
                value: d.id, viewValue: d.id + ' - ' + d.name
            }));
            this.lanzamientos = results[3].launches;
            this.cargado = true;
            // Imitamos una cierta demora con delay(xxx)
            console.log('Servicio inicializado (json listos para su consumo)');
        });
    }
    ngOnInit() {
        // Este modo empieza a 'cachear' los arrays de estados, agencias y tipos de misión en la inicialización del componente,
        // Pero hay que seguir esperando a que esten cargados antes de que se vea el componente
        // this.http.get('/assets/launchstatus.json').subscribe((res: any) =>
        //     this.estados = res.types.map(d => ({ value: d.id, viewValue: d.id + ' - ' + d.description + ' (' + d.name + ')' }))
        // );
        // this.http.get('/assets/launchagencies.json').subscribe((res: any) =>
        //     this.agencias = res.agencies.map(d => ({ value: d.id, viewValue: d.id + ' - ' + d.name }))
        // );
        // this.http.get('/assets/launchmissions.json').subscribe((res: any) =>
        //     this.tiposMision = res.types.map(d => ({ value: d.id, viewValue: d.id + ' - ' + d.name }))
        // );
    }
}

