import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NjBuscadorComponent } from './nj-buscador.component';

describe('NjBuscadorComponent', () => {
  let component: NjBuscadorComponent;
  let fixture: ComponentFixture<NjBuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NjBuscadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NjBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
