import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '../../service/reserva.service';
import {
  IonHeader,
  IonToolbar,
  IonCardContent,
  IonCard,
  IonItem,
  IonContent,
  IonTitle,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonInput,   // Cambié IonDatetime por IonInput
  IonButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  standalone: true, // Indica que el componente es standalone
  imports: [
    IonHeader,
    IonToolbar,
    IonCardContent,
    IonCard,
    IonItem,
    IonContent,
    IonTitle,
    IonCardHeader,
    IonCardTitle,
    IonLabel,
    IonInput,   // Cambié IonDatetime por IonInput
    IonButton,
    FormsModule, // Importa FormsModule para ngModel
  ],
})
export class ReservaPage implements OnInit {
  // Objeto de reserva con valores iniciales
  reserva = {
    userId: '',        // ID del usuario que realiza la reserva
    canchaId: '',      // ID de la cancha que se reserva
    date: '',          // Fecha de la reserva (string)
    start_time: '',    // Hora de inicio (string)
    end_time: '',      // Hora de fin (string)
  };

  constructor(
    private router: Router,              // Para la navegación entre vistas
    private reservaService: ReservaService // Servicio para enviar datos al backend
  ) {}

  ngOnInit() {
    // Recuperar datos pasados desde la página anterior (principal)
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['reservaData']) {
      this.reserva.userId = state['reservaData'].userId || '';
      this.reserva.canchaId = state['reservaData'].canchaId || '';
    }
  }

  // Método para guardar la reserva
  guardarReserva() {
    // Asegurarse de que los valores sean válidos (no nulos)
    this.reserva.date = this.reserva.date || '';
    this.reserva.start_time = this.reserva.start_time || '';
    this.reserva.end_time = this.reserva.end_time || '';

    // Llamar al servicio para enviar los datos al backend
    this.reservaService.createReserva(this.reserva).subscribe(
      (response) => {
        console.log('Reserva creada con éxito:', response);
        // Redirigir a la página principal después de guardar
        this.router.navigateByUrl('/principal');
      },
      (error) => {
        console.error('Error al crear la reserva:', error);
      }
    );
  }
}
