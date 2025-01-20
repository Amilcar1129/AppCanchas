import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanchaService {
  private baseUrl = 'http://localhost:3000/api/canchas'; // Cambia esto según tu endpoint

  constructor(private http: HttpClient) {}

  // Obtener todas las canchas
  getAllCanchas(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Obtener detalles de una cancha por ID
  getCanchaById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Crear una nueva cancha
  createCancha(cancha: { name: string; location: string; type: string; price_per_hour: null }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.baseUrl, cancha, { headers });
  }
}
