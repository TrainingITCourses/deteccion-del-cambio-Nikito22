import { Component, OnInit, Input } from '@angular/core';
import { enTipoCriterio } from '../ls-buscador.component';
import { Iselopt } from '../../api.service';

@Component({
  selector: 'ls-buscador-criterios',
  templateUrl: './buscadorCriterios.component.html',
  styleUrls: ['./buscadorCriterios.component.css']
})
export class LsBuscadorCriteriosComponent implements OnInit {
  @Input() tipoCriterio: enTipoCriterio;

  @Input() valoresCriterios: Iselopt;

  constructor() { }

  ngOnInit() {
  }
  changeCriterio(event) {

  }
}
