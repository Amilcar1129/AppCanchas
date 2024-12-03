import { Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonApp, IonButton, IonItem, IonInput, IonCheckbox, IonLabel,IonSelect,IonSelectOption } from '@ionic/angular/standalone';
import { UsuarioService } from 'src/app/service/usuario.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonLabel, IonCheckbox, IonInput, IonItem, IonButton, IonApp, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink,IonSelect,IonSelectOption]
})
export class RegisterPage implements OnInit {

  constructor(private usuarioservice:UsuarioService, private router:Router, 
    private loadingController:LoadingController, private alertController:AlertController) { }

  ngOnInit() {
  }
  async Registro(user:any, email:any, password:any,typeusers_id:any) {
    const loading = await this.loadingController.create({
      message: 'Registrando usuario...',
      spinner: 'circles',
    });
  
    await loading.present();
  
    // Llamar al servicio para registrar
    this.usuarioservice.Registro(user.value, email.value, password.value,typeusers_id.value).subscribe({
      next: async (data: any) => {
        await loading.dismiss();
        
        // Mostrar alerta de éxito
        const alert = await this.alertController.create({
          header: 'Registro Exitoso',
          message: 'El usuario ha sido registrado con éxito.',
          buttons: ['OK'],
        });
        await alert.present();
  
        // Navegar a otra página si lo deseas
        this.router.navigateByUrl('principal');
      },
      error: async (e: any) => {
        await loading.dismiss();
        
        // Mostrar alerta de error
        const alert = await this.alertController.create({
          header: 'Error',
          message: e.error.message || 'Ocurrió un error al registrar el usuario.',
          buttons: ['OK'],
        });
        await alert.present();
      },
    });
  }

}
