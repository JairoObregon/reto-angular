import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';

import { ProductsListService } from '../../service/products-list.service';
import { product } from 'src/app/utils/models/product-cart';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  myData 

  constructor(private http: ProductsListService,private service:CartService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.http.getData().subscribe(
      data => {
        this.myData = data
      }
    )
  }

   addCart(product:any)
  { 
   this.service.changeCart(product);
  }


}
