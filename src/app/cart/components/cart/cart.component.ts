import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/utils/models/product-cart';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  data$  = []
  totalPrice$
  constructor(private service:CartService) { }

  ngOnInit(): void {
    this.DataCarrito()
  }

  public DataCarrito(){
    this.service.currentDataCart$.subscribe(
      valor => {
        if(valor){
          this.data$ = valor
          this.totalPrice$ = valor.reduce((sum, producto) => sum + (producto.precio * producto.cantidad), 0); 
        }
        
      }
    )
    
  }
  public addCart(product:product)
  { 
   this.service.changeCart(product);
  }

  public removeProduct(product:product){
    this.service.removeProduct(product);
  }

  public remove(producto:product)
  {
   this.service.removeElementCart(producto);
  }
  

}
