import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonApp, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonInput, IonApp, IonIcon, IonButton , IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WelcomePage implements OnInit {

  constructor(private usuarioservice:UsuarioService, private router:Router, 
    private LoadingController:LoadingController, private alertController:AlertController) { }
  
  ngOnInit() {
  }
  
  async login(email:any, password:any){
    const loading = await this.LoadingController.create({
      message: 'Iniciando sesión...',
      spinner:'circles',
    });
    loading.present();
    this.usuarioservice.login(email.value,password.value).subscribe({
      next: async (datos:any) => { 
        localStorage.setItem('token', datos.token);
        localStorage.setItem('id',datos.dataUser.id);
        localStorage.setItem('username',datos.dataUser.user);
        loading.dismiss();
        this.router.navigateByUrl('principal');     
    },
  error: async (e: any) => {

    loading.dismiss();
    const alert = await this.alertController.create({
      header: 'Error',
      message:e.error.message ,
      buttons: ['OK'],
    });
    await alert.present();

  }
  })
  }
  
}
