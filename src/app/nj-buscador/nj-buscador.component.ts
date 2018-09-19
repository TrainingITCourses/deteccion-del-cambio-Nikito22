import { EstadosService } from './../estados.service';
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

  constructor(private estados: EstadosService) {
  }

  ngOnInit() {
    this.tipoCriterio = 1;
    this.tipoCriterioTexto = this.criterios[this.tipoCriterio].viewValue;
  }

  onChangeTipoCriterio(event) {
    const e = event.srcElement;
    this.tipoCriterio = e.selectedIndex;
    var o = this.criterios[this.tipoCriterio];
    this.tipoCriterioTexto = o.viewValue;
    this.leerValoresCriterio(o.value);
  }

  leerValoresCriterio(criterio: string) {
    if (criterio === 'E') {
      const estados = this.estados.estados;
      this.valorCriterios = estados;
    }
  }

}
