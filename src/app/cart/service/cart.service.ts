import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {product} from './../../utils/models/product-cart'


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart = new BehaviorSubject<Array<product>>(null); 
  public currentDataCart$ = this.cart.asObservable(); 
  constructor() { }

   changeCart(newData: product) {

    let listCart = this.cart.getValue();
    if(listCart)
    {
      let flag = false
      listCart.forEach( objeto => {
        if(objeto.idi === newData.idi){
          objeto.cantidad = objeto.cantidad + 1
          flag = true
        }
      })
      //Nuevo producto
      if(flag === false){
        listCart.push(newData);
      } 
    }
    //Primer producto
    else {
      
      listCart = [];
      listCart.push(newData);
    }
    this.cart.next(listCart);
  }

  public removeProduct(newData:product){

    let listCart = this.cart.getValue();

    let objIndex = listCart.findIndex((obj => obj.idi == newData.idi));
    if(objIndex != -1)
    {
      listCart[objIndex].cantidad = listCart[objIndex].cantidad-1;
      if(listCart[objIndex].cantidad === 0){
        listCart.splice(objIndex,1);
      }
    }
    this.cart.next(listCart); 

}

  public removeElementCart(newData:product){

    let listCart = this.cart.getValue();

    let objIndex = listCart.findIndex((obj => obj.idi == newData.idi));
    if(objIndex != -1)
    {
      listCart[objIndex].cantidad = 1;
      listCart.splice(objIndex,1);
    }
    this.cart.next(listCart); 

}
}
