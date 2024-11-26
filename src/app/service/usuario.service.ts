import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  login(email:string,password:string){
    let datos={
      'email':email,
      'password':password
    }
    return this.http.post('http://localhost:3000/api/login',datos)
  }
  getOneUser(id:number){
    
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.get('http://localhost:3000/api/user/'+id, { headers: header });
  }
}
