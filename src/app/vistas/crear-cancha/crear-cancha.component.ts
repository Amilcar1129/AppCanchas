import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanchaService } from '../../service/canchas.service';
import { FormsModule } from '@angular/forms';
import { IonApp, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-crear-cancha',
  templateUrl: './crear-cancha.component.html',
  styleUrls: ['./crear-cancha.component.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonLabel,
    IonItem,
    IonList,
    IonContent,
    IonApp,
    IonButton,
    FormsModule, // Importamos FormsModule para habilitar ngModel
  ],
})
export class CrearCanchaComponent implements OnInit {
  cancha = {
    name: '',
    location: '',
    type: '',
    price_per_hour: null,
  };

  constructor(private canchaService: CanchaService, private router: Router) {}

  ngOnInit(): void {
    // Aquí puedes inicializar lógica adicional si es necesario
  }

  onSubmit() {
    // Validamos que todos los campos estén llenos
    if (!this.cancha.name || !this.cancha.location || !this.cancha.type || this.cancha.price_per_hour == null) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Llamada al servicio para crear la cancha
    this.canchaService.createCancha(this.cancha).subscribe(
      (response) => {
        console.log('Cancha creada con éxito:', response);
        this.router.navigate(['/principal']); // Redirige al listado de canchas
      },
      (error) => {
        console.error('Error al crear la cancha:', error);
        alert('Error al crear la cancha.');
      }
    );
  }
}