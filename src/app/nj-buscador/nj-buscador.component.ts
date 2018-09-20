import { APIService } from './../estados.service';
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

<<<<<<< HEAD
  constructor(private estados: APIService) { }
=======
  constructor(private estados: EstadosService) {
  }
>>>>>>> f71904de5b173d12ac63f238978c8f37e5577dfc

  ngOnInit() {
    this.tipoCriterio = 1;
    this.tipoCriterioTexto = this.criterios[this.tipoCriterio].viewValue;
  }

<<<<<<< HEAD
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
=======
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
>>>>>>> f71904de5b173d12ac63f238978c8f37e5577dfc
    }
  }

}
