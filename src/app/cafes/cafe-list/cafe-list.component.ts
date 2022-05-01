import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

/** Componente con la lista de cafés desplegada en una tabla */
@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];
  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.getCafesList();
  }

  getCafesList(): void {
    this.cafeService.getCafesList().subscribe((cafes)=>{
      this.cafes = cafes;
    });
  }
}
