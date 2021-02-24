import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../../service/product-detail.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../cart/service/cart.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  myData$ = []
  obje
  parametro : number
  constructor(private http: ProductDetailService,private rutaActiva: ActivatedRoute, private service:CartService) { }

  ngOnInit(): void {
    this.loadData()
  }

   loadData(){
    this.http.getData().subscribe(
      data => {
        this.myData$=data
        this.parametro =  this.rutaActiva.snapshot.params['id']
        this.obje=this.myData$.find( rpta => { return rpta.idi == this.parametro})

      }
    )
  }

  addCart(product:any)
  { 
   this.service.changeCart(product);
  }

}
