import { LsBuscadorComponent, enTipoCriterio } from '../ls-buscador.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ls-buscador-lanzamientos',
  templateUrl: './buscadorLanzamientos.component.html',
  styleUrls: ['./buscadorLanzamientos.component.css']
})
export class LsBuscadorLanzamientosComponent implements OnInit {
  @Input() tipoCriterio: enTipoCriterio;
  constructor() { }

  ngOnInit() {
  }

}
