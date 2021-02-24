import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  constructor( public http: HttpClient) { }

  getData(){
    return this.http.get('./assets/data.json')
  }
}
