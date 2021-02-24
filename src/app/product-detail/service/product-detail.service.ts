import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {map, filter} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor( public http: HttpClient) { }

  getData(){
    return this.http.get<any>('./assets/data.json')
  }
}
