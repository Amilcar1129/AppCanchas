import { PersonPage } from '../person/person.page';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  updatePerson (id:any,name:string,lastname:string,ci:string,address:string,phone:number){
    const data={
      "id":id,
      "name":name,
      "lastname":lastname,
      "ci":ci,
      "address":address,
      "phone":phone

    }
    const header =new HttpHeaders()
      .set ('Authorization',`Bearer ${localStorage.getItem('token')}`);
      return this.http.put<any>('http://127.0.0.1:3000/api/person/'+id,data,{headers:header});
    }
    updateImage(id:any, image:any){
      const data = new FormData();
      data.append('file', image);
     // const header = new HttpHeaders()
     // .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return this.http.put<any>('http://127.0.0.1:3000/api/update/image/'+id, data);     
    }    
}

