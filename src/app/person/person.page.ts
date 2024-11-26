import { UsuarioService } from 'src/app/service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonInput, IonButton, IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonButton, IonInput, IonList, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PersonPage implements OnInit {
  profile:any;
  personid:any;
  
  constructor(private UsuarioService:UsuarioService) { 
    this.personid=localStorage.getItem('id')
  
  }

  ngOnInit() {
    this.viewProfile();

  }
  viewProfile(){
    this.UsuarioService.getOneUser(this.personid).subscribe({
      next: (data:any) => {
        this.profile=data;
  },
  error: (error:any) => {
    

}
    })



    
  }

  }
