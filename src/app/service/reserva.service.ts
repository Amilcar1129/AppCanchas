import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private apiUrl = 'http://localhost:3000/api'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getReservas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reservas`);
  }
  
  createReserva(reserva: any): Observable<any> {
    // Asegura que el user_id esté presente en la reserva antes de enviarla
    if (!reserva.user_id) {
      console.error('Error: El user_id no está definido en la reserva.');
      return new Observable(observer => observer.error('El user_id es obligatorio'));
    }
  
    return this.http.post(`${this.apiUrl}/reservas`, reserva);
  }
}

