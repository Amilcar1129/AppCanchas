import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonApp, IonList, IonItem, IonLabel, IonButton, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { CanchaService } from '../service/canchas.service';
import { Router,ActivatedRoute, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
  import { playCircle, radio, personCircleOutline, basketballOutline, peopleOutline, trophyOutline, homeOutline, calendarOutline, footballOutline } from 'ionicons/icons';

  addIcons({
    'footballOutline': footballOutline,
    'calendarOutline': calendarOutline,
    'homeOutline': homeOutline,
    'person-circle-outline': personCircleOutline,
  });


@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabBar, IonButton, IonLabel, IonItem, IonList, IonApp, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterModule,RouterLink]
})
export class CrearPage implements OnInit {
  user: any=null;
cancha = {
    name: '',
    location: '',
    type: '',
    price_per_hour: null,
  };

  constructor(private canchaService: CanchaService, private router: Router) {      addIcons({basketballOutline,peopleOutline,trophyOutline,footballOutline,homeOutline,calendarOutline,personCircleOutline,playCircle,radio});}

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
