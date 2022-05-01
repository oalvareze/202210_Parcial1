import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cafe } from './cafe';

/** Servicio para obtener la información de los cafés */
@Injectable({
  providedIn: 'root'
})
export class CafeService {
  private apiURL: string = environment.baseUrl + "202212_MISW4104_Grupo3.json";

  constructor(private httpClient: HttpClient) { }

  /** Método que obtiene la lista completa de cafés */
  getCafesList(): Observable<Cafe[]>{
    return this.httpClient.get<Cafe[]>(this.apiURL);
  }
}
