import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private apiUrl = 'http://localhost:3000/api/reservas'; // Reemplaza con tu endpoint

  constructor(private http: HttpClient) {}

  // Crear una reserva
  createReserva(reserva: any): Observable<any> {
    return this.http.post(this.apiUrl, reserva);
  }
}

