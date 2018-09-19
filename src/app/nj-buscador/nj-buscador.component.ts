import { EstadosService } from './../estados.service';
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

  constructor(private estados: EstadosService) {  }

  ngOnInit() {
  }

  changeTipoCriterio(event) {
    this.tipoCriterio = event.value;
  }

  leerValoresCriterio(criterio: string) {
    if (criterio === 'E') {
      this.valorCriterios = this.estados.getJSON();
    }
  }

}
