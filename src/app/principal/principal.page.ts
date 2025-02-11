import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { CanchaService } from '../service/canchas.service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonTabButton, IonIcon, 
  IonTabBar, IonButton, IonCard, IonCol, IonGrid, IonRow, 
  IonTabs, IonApp, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';
  import { addIcons } from 'ionicons';
  import { playCircle, radio, personCircleOutline, basketballOutline, peopleOutline, trophyOutline, homeOutline, calendarOutline, footballOutline } from 'ionicons/icons';

  addIcons({
    'footballOutline': footballOutline,
    'calendarOutline': calendarOutline,
    'homeOutline': homeOutline,
    'person-circle-outline': personCircleOutline,
  });

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [ IonCardContent, IonCardTitle, IonCardHeader, IonApp, 
   IonTabs, IonContent, IonTabButton, IonIcon, IonTabBar, IonButton, IonCard, IonCol, 
    IonGrid, IonRow, CommonModule, FormsModule, RouterLink
    
  ],
})
export class PrincipalPage implements OnInit {
  user: any=null; // Usuario autenticado
  canchas: any[] = []; // Lista de canchas disponibles
  //idtu:any;
  nuevaCancha = {
    name: '',
    location: '',
    type: '',
    price_per_hour: ''
  }; 

  constructor(
    private usuarioService: UsuarioService,
    private canchaService: CanchaService,
    private router: Router
  ) {
      addIcons({basketballOutline,peopleOutline,trophyOutline,footballOutline,homeOutline,calendarOutline,personCircleOutline,playCircle,radio});}

  goToCrearCancha() {
    this.router.navigateByUrl('/crear-cancha');
  }

  ngOnInit() {
    this.loadUser();
    this.loadCanchas();
    //this.idtu=localStorage.getItem('idtu');
  }

  // Cargar usuario autenticado
  loadUser() {
    this.user = localStorage.getItem('username');
    if (!this.user) {
      console.warn('Usuario no autenticado, redirigiendo al login.');
      this.router.navigateByUrl('/login');
    }
  }

  // Cargar canchas disponibles desde el backend
  loadCanchas() {
    this.canchaService.getAllCanchas().subscribe(
      (data:any) => {
        this.canchas = data;
      },
      (error:any) => {
        console.error('Error al cargar canchas:', error);
      }
    );
  }

  reservarCancha(cancha: any) {
    this.router.navigate(['/reserva', cancha.id]); // Redirige a reserva con el ID en la URL
  }

  }
  

  
  



