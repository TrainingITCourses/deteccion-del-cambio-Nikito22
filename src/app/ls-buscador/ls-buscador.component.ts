import { APIService, Ilanzamiento, Iselopt } from '../api.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export enum enTipoCriterio {
  Estado,
  Agencia,
  TipoMision
}

@Component({
  selector: 'ls-buscador',
  templateUrl: './ls-buscador.component.html',
  styleUrls: ['./ls-buscador.component.css']
})
export class LsBuscadorComponent implements OnInit {

  public tipoCriterio: enTipoCriterio;

  private valoresCriterios: Array<Iselopt>;
  private valorCriterio: string;
  private lanzamientosFiltrados: Array<Ilanzamiento>;

  constructor(public Api: APIService) {
  }

  ngOnInit() {
    this.tipoCriterio = -1; // No establecemos tipo de criterio inicialmente
  }

  changeTipoCriterio(event) {
    this.tipoCriterio = event.target.value;
    this.leerValoresCriterio(this.tipoCriterio);
  }

  changeCriterio(event) {
    const v = event.target.value;
    switch (this.tipoCriterio) {
      case 0:
        this.lanzamientosFiltrados = this.Api.lanzamientos.filter(x => x.status === Number(v));
        break;
      case 1:
        this.lanzamientosFiltrados = this.Api.lanzamientos.filter((x) => x.lsp === v);
        break;
      case 2:
        this.lanzamientosFiltrados = this.Api.lanzamientos.filter((x) => x.missionId === v);
        break;
    }
  }

  leerValoresCriterio(criterio: enTipoCriterio) {
    switch (criterio) {
      case enTipoCriterio.Agencia:
        this.valoresCriterios = this.Api.estados;
        break;
      case enTipoCriterio.Estado:
        this.valoresCriterios = this.Api.agencias;
        break;
      case enTipoCriterio.TipoMision:
        this.valoresCriterios = this.Api.tiposMision;
        break;
    }
  }

  cuentaLanzamientos() {
    console.log('Cuenta de lanzamientos');
    return this.lanzamientosFiltrados.length;
  }
}
