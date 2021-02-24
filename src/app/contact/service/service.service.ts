import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { contact } from 'src/app/utils/models/contact';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }

  PostData(contact:contact){
    //simulando que envio al back
    // return this.http.post('http.......',contact)
  }
}
