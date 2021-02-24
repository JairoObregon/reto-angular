import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/service/cart.service';
import { product } from 'src/app/utils/models/product-cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  data$  = []
  totalPrice$
  tamanio$
  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.DataCarrito()
  }

  public DataCarrito(){
    this.service.currentDataCart$.subscribe(
      valor => {
        if(valor){
          this.data$ = valor
          this.tamanio$ = valor.reduce((sum, current) => sum + (current.cantidad), 0); 
          this.totalPrice$ = valor.reduce((sum, current) => sum + (current.precio * current.cantidad), 0); 
        }else{
          this.tamanio$ = 0
        }
        
      }
    )
    
  }

  public remove(producto:product)
  {
   this.service.removeElementCart(producto);
  }

}
