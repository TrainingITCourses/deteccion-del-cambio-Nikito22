import { APIService } from './../api.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
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

  public valoresCriterios: any[];
  public valorCriterio: string;
  public lanzamientosFiltrados: any[];

  constructor(public Api: APIService) {
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
  changeCriterio() {
    switch (this.tipoCriterio) {
      case 0:
        this.lanzamientosFiltrados = this.Api.lanzamientos.filter(x => x.status = this.valorCriterio);
        break;
      case 1:
        this.lanzamientosFiltrados = this.Api.lanzamientos.filter(x => x.lsp = this.valorCriterio);
        break;
      case 2:
        this.lanzamientosFiltrados = this.Api.lanzamientos.filter(x => x.state = this.valorCriterio);
        break;
    }
  }
  leerValoresCriterio(criterio: number) {
    switch (criterio) {
      case 0:
        this.valoresCriterios = this.Api.estados;
        break;
      case 1:
        this.valoresCriterios = this.Api.agencias;
        break;
      case 2:
        this.valoresCriterios = this.Api.tiposMisiones;
        break;
    }
  }

}
