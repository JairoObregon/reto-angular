import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { HomeService } from '../../service/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myData
  existeInfo = false
  constructor(private http: HomeService,private service:CartService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.http.getData().subscribe(
      data => {
        this.myData = data
        let tamaño = this.myData.length
        this.myData =this.myData.slice(tamaño-3,tamaño)
        this.existeInfo = true
      }
    )
  }
  addCart(product:any)
  { 
   this.service.changeCart(product);
  }
}
