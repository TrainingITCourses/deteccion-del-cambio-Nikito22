import { APIService } from './../api.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nj-buscador',
  templateUrl: './nj-buscador.component.html',
  styleUrls: ['./nj-buscador.component.css']
})
export class NjBuscadorComponent implements OnInit {

  public tipoCriterio: number;
  public tipoCriterioTexto: string;

  public opcion = { value: '', viewValue: '' };

  criterios = [
    { value: 'E', viewValue: 'Estado' },
    { value: 'A', viewValue: 'Agencia' },
    { value: 'T', viewValue: 'Tipo' }
  ];

  public valorCriterios: any;

  constructor(private Api: APIService) {
  }

  ngOnInit() {
    this.tipoCriterio = 0;
    this.tipoCriterioTexto = this.criterios[this.tipoCriterio].viewValue;
  }

  changeTipoCriterio(event) {
    this.tipoCriterio = event.target.selectedIndex;
    this.tipoCriterioTexto = this.criterios[this.tipoCriterio].viewValue;
    this.leerValoresCriterio(event.target.selectedIndex);
  }

  leerValoresCriterio(criterio: number) {
    switch (criterio) {
      case 0:
        this.valorCriterios = this.Api.estados.map(d => ({
          value: d.id, viewValue: d.description + ' (' + d.name + ')'
        }));
        break;
      case 1:
        this.valorCriterios = this.Api.agencias.map(d => ({
          value: d.id, viewValue: d.name
        }));
        break;
      case 2:
        this.valorCriterios = this.Api.tiposMisiones.map(d => ({
          value: d.id, viewValue: d.name
        }));
        break;
    }
  }

}
