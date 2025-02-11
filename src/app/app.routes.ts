import { Routes } from '@angular/router';
import { permissionGuard } from './guard/permission.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'saludo',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then(m => m.WelcomePage)
  },
  {
    path: 'saludo',
    loadComponent: () => import('./saludo/saludo.page').then(m => m.SaludoPage)
  },
  {
    path: 'bienvenida',
    loadComponent: () => import('./bienvenida/bienvenida.page').then(m => m.BienvenidaPage)
  },
  {
    path: 'reserva/:id',
    loadComponent: () => import('./reservas/reservas.page').then(m => m.ReservaPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage)
  },

  {
    path: 'principal',  // Definir principal como una ruta principal
    loadComponent: () => import('./principal/principal.page').then(m => m.PrincipalPage)
  },
  {
    path: 'crear',
    loadComponent: () => import('./crear/crear.page').then( m => m.CrearPage)
  },
  
  {
path: 'person',
        loadComponent: () => import('./person/person.page').then(m => m.PersonPage),
       // canActivate: [permissionGuard]
      },
      {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full'
      },

  
];
