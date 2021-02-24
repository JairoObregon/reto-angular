import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() objeto : any
  constructor(private service:CartService) { }

  ngOnInit(): void {
  }
  
  addCart(product:any)
  { 
   this.service.changeCart(product);
  }

}
