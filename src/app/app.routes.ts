import { Routes } from '@angular/router';

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
    loadComponent: () => import('./vistas/welcome/welcome.page').then( m => m.WelcomePage)
  },
  {
    path: 'saludo',
    loadComponent: () => import('./vistas/saludo/saludo.page').then( m => m.SaludoPage)
  },
  {
    path: 'bienvenida',
    loadComponent: () => import('./vistas/bienvenida/bienvenida.page').then( m => m.BienvenidaPage)
  },
  {
    path: 'principal',
    loadComponent: () => import('./vistas/principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'person',
    loadComponent: () => import('./vistas/person/person.page').then( m => m.PersonPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./vistas/register/register.page').then( m => m.RegisterPage)
  },

];
