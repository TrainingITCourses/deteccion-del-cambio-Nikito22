import { APIService } from './../estados.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nj-buscador',
  templateUrl: './nj-buscador.component.html',
  styleUrls: ['./nj-buscador.component.css']
})
export class NjBuscadorComponent implements OnInit {

  public tipoCriterio: '';

  public opcion = { value: '', viewValue: '' };

  criterios = [
    { value: 'E', viewValue: 'Estado' },
    { value: 'A', viewValue: 'Agencia' },
    { value: 'T', viewValue: 'Tipo' }
  ];

  public valorCriterios: any;

  constructor(private estados: APIService) { }

  ngOnInit() {
  }

  changeTipoCriterio(event) {
    this.tipoCriterio = this.criterios[event.srcElement.selectedIndex].value;
    this.leerValoresCriterio(this.tipoCriterio);
  }

  leerValoresCriterio(criterio: string) {
    switch (criterio) {
      case 'E':
        this.valorCriterios = this.estados.estados();
        break;
      case 'A':
        this.valorCriterios = this.estados.agencias();
        break;
      case 'M':
        this.valorCriterios = this.estados.tiposMisiones();
        break;
    }
  }

}
