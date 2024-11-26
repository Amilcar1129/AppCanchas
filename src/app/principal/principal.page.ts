import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonIcon, IonLabel, IonTabBar, IonFooter, IonButton, IonCard, IonCol, IonGrid, IonRow, IonButtons, IonApp } from '@ionic/angular/standalone';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonApp, IonButtons, IonRow, IonGrid, IonCol, IonCard, IonButton, IonFooter, IonTabBar, IonLabel, IonIcon, IonTabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PrincipalPage implements OnInit {
user:any="";
  constructor() { }

  ngOnInit() {

   this.user= localStorage.getItem('username')
  }

}
