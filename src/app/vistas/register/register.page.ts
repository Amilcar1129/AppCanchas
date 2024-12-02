import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonApp, IonButton, IonItem, IonInput, IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonInput, IonItem, IonButton, IonApp, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigateByUrl('/principal')
  }
}
