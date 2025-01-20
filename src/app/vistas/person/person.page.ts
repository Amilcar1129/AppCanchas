import { UsuarioService } from 'src/app/service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonInput, IonButton, IonAvatar, IonButtons, IonIcon, IonApp } from '@ionic/angular/standalone';
import { pencil} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PersonService } from 'src/app/service/person.service';
import { IUser } from '../interface/IUser';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonAvatar, IonButton, IonInput, IonLabel, IonItem, IonContent, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PersonPage implements OnInit {
  profile!:IUser;
  personid:any;
  editDatos:boolean=true;
  constructor(private usuarioService:UsuarioService, private personService:PersonService) { 
    this.personid=localStorage.getItem('id');
    addIcons({pencil});
  
  }

  ngOnInit() {
    this.viewProfile();

  }
  editPerfil(){
this.editDatos=false;

  }
  viewProfile(){
    this.usuarioService.getOneUser(this.personid).subscribe({
      next: (data:any) => {
        this.profile=data;
        
  },
  error: (error:any) => {
    

      }

    })
  }

  updatePerson(){
    this.personService.updatePerson(1, "juan", "vera","23","porto",987).subscribe({
      next:(data:IUser)=>{  
        debugger
      },
      error:(error:any)=>{
          debugger
      }
    })
}

  }
