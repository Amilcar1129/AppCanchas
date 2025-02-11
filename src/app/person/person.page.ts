import { UsuarioService } from 'src/app/service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonInput, IonButton, IonAvatar, IonButtons, IonIcon, IonApp, IonTabBar, IonTabButton } from '@ionic/angular/standalone';
import { pencil, playCircle, radio, personCircleOutline, homeOutline, calendarOutline, footballOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PersonService } from 'src/app/service/person.service';
import { IUser } from '../interface/IUser';
import { Router,RouterLink} from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
  standalone: true,
  imports: [IonTabButton, IonTabBar, IonIcon, IonButtons, IonAvatar, IonButton, IonInput, IonLabel, IonItem, IonContent, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonHeader,RouterLink]
})
export class PersonPage implements OnInit {
  profile!:IUser;
  personid:any;
  person:any;
  editDatos:boolean=true;
  constructor(private usuarioService:UsuarioService, private personService:PersonService, private Router:Router) { 
    this.personid=localStorage.getItem('id');
    addIcons({pencil,footballOutline,homeOutline,calendarOutline,playCircle,radio,personCircleOutline});
    this.person = localStorage.getItem('idp');
  }

  ngOnInit() {
    this.viewProfile();

  }
  editPerfil(){
this.editDatos=false;

  }
  viewProfile(){
    this.usuarioService.getOneUser(this.personid).subscribe({
      next:(data:any)=>{  
      console.log(data);

        this.profile=data;
      },
      error:(error:any)=>{
        console.error('Error fetching user profile:', error);

      }

    })
  }

  updatePerson(nombre:any,apellido:any,cedula:any,direccion:any,telefono:any){
   
    const idp =localStorage.getItem('idp');
        this.personService.updatePerson(idp,nombre.value,apellido.value ,cedula.value,direccion.value,telefono.value).subscribe({
          next:(data:IUser)=>{  
  
            this.viewProfile();
          },
          error:(error:any)=>{
  
          }
})
}
changeImage(event:any){
  const file = event.target.files[0];
  debugger
  this.personService.updateImage(this.person, file).subscribe({
    next:(data:any)=>{  
      this.viewProfile();
      
    },
    error:(error:any)=>{
       console.error('Error updating image:', error);

    }
  })
}

cerrarSesion(){
  localStorage.clear()
  this.Router.navigateByUrl('/welcome')
}
}
