import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/service/reserva.service';
import { IonToolbar, IonCardHeader, IonHeader, IonTitle, IonLabel, IonContent, IonItem, IonInput, IonButton, IonList, IonTabBar, IonTabButton, IonIcon } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, RouterLink } from '@angular/router';  // Importa ActivatedRoute
import { addIcons } from 'ionicons';
  import { playCircle, radio, personCircleOutline, basketballOutline, peopleOutline, trophyOutline, homeOutline, calendarOutline, footballOutline } from 'ionicons/icons';

  addIcons({
    'footballOutline': footballOutline,
    'calendarOutline': calendarOutline,
    'homeOutline': homeOutline,
    'person-circle-outline': personCircleOutline,
  });

@Component({
  selector: 'app-reserva',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  standalone: true, // Indica que el componente es standalone
  imports: [RouterLink, IonIcon, IonTabButton, IonTabBar, IonList, IonButton, IonInput, IonItem, IonContent, IonLabel, IonTitle, IonHeader, IonCardHeader, IonToolbar, FormsModule, CommonModule ]
})
export class ReservaPage implements OnInit {
  user: any=null;
  reservas: any[] = [];
  newReserva: any = {
    user_id: '',
    cancha_id: '',
    date: '',
    start_time: '',
    end_time: '',
    total_price: ''
  };
  editDatos: boolean = true; // Declaración de la variable

  constructor(private reservaService: ReservaService, private route: ActivatedRoute,) {addIcons({basketballOutline,peopleOutline,trophyOutline,footballOutline,homeOutline,calendarOutline,personCircleOutline,playCircle,radio});}

  ngOnInit() {
    this.getReservas();
    // Captura el parámetro de la URL
    this.route.paramMap.subscribe(params => {
      this.newReserva.cancha_id = params.get('id');
      console.log('ID de la cancha seleccionada:', this.newReserva.cancha_id);
    });
  }
 
  


  getReservas() {
    this.reservaService.getReservas().subscribe(data => {
      this.reservas = data;
    });
  }

  createReserva() {
    if (!this.user || !this.user.id) {
      console.error('Error: No hay usuario autenticado.');
      return;
    }
  
    this.newReserva.user_id = this.user.id; // Asigna el usuario autenticado
  
    this.reservaService.createReserva(this.newReserva).subscribe({
      next: (data) => {
        console.log('Reserva creada:', data);
        this.reservas.push(data);
  
        // Limpiar formulario después de crear reserva
        this.newReserva = {
          user_id: this.user.id,  // Mantiene el usuario autenticado
          cancha_id: '',
          date: '',
          start_time: '',
          end_time: '',
          total_price: ''
        };
      },
      error: (err) => {
        console.error('Error al crear reserva:', err);
      }
    });
  }
  
}
