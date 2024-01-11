import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStock } from '../Interface/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private urlBase: string =
  'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Stock.Controller.php?op=';
constructor(private cliente: HttpClient) {}

todos(): Observable<IStock[]> {
  return this.cliente.get<IStock[]>(this.urlBase + 'todos');

}
}
