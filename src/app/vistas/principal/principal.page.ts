import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { CanchaService } from '../../service/canchas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonIcon, 
  IonLabel, IonTabBar, IonButton, IonCard, IonCol, IonGrid, IonRow, 
  IonTabs, IonRouterOutlet, IonApp, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonApp, 
    IonRouterOutlet, IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, 
    IonTabButton, IonIcon, IonLabel, IonTabBar, IonButton, IonCard, IonCol, 
    IonGrid, IonRow, CommonModule, FormsModule, RouterLink,
  ],
})
export class PrincipalPage implements OnInit {
  user: any; // Usuario autenticado
  canchas: any[] = []; // Lista de canchas disponibles
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
  ) {}

  goToCrearCancha() {
    this.router.navigateByUrl('/crear-cancha');
  }

  ngOnInit() {
    this.loadUser();
    this.loadCanchas();
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
    const reservaData = {
      userId: this.user,
      canchaId: cancha.id,
    };
    this.router.navigate(['/reserva'], { state: { reservaData } });
  }


  
  
}


