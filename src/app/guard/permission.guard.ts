import { CanActivateFn } from '@angular/router';

export const permissionGuard: CanActivateFn = (route, state) => {
 /* const idtu=localStorage.getItem('idtu');
  if (idtu!="2"){
    return false; 
  } */
  return true;

};
