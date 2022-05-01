/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ],
      providers: [CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    component.cafes = [
      new Cafe(
        101,
        "Primer Café",
        "Primer Tipo",
        "Primera región",
        "Primer sabor",
        1001,
        "primera-imagen.jpg"
      ),
      new Cafe(
        102,
        "Segundo Café",
        "Segundo Tipo",
        "Segundo región",
        "Segundo sabor",
        1002,
        "segunda-imagen.jpg"
      ),
      new Cafe(
        103,
        "Tercer Café",
        "Tercer Tipo",
        "Tercer región",
        "Tercer sabor",
        1003,
        "tercera-imagen.jpg"
      ),
    ]
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });
  it('Debe tener una tabla con encabezado (1 fila) y cuerpo con 3 filas', () => {
    expect(debug.queryAll(By.css('table>thead>tr')).length).toBe(1);
    expect(debug.queryAll(By.css('table>tbody>tr')).length).toBe(component.cafes.length);
  });
});
