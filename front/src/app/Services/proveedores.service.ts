import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProveedor } from '../Interface/iproveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private urlBase: string =
  'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php?op=';
constructor(private cliente: HttpClient) {}

todos(): Observable<IProveedor[]> {
  return this.cliente.get<IProveedor[]>(this.urlBase + 'todos');
}
}
