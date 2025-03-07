import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SaludoPage implements OnInit {

  constructor(public router:Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('welcome')
    },4000)
  }

  ngOnInit() {
  }

}
