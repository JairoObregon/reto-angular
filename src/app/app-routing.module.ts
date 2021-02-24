import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { HomeComponent } from './home/components/home/home.component';
import { ProductDetailComponent } from './product-detail/components/product-detail/product-detail.component';
import { ProductListComponent } from './product-list/components/product-list/product-list.component';
import { ComponentComponent } from './contact/component/component.component';


const routes: Routes = [
  { 
   path:'home' , component: HomeComponent
  },
  { 
    path:'product-detail/:id' , component: ProductDetailComponent
  },
  { 
    path:'products-lists' , component: ProductListComponent
  },
  { 
    path:'cart' , component: CartComponent
  },
  { 
    path:'contact' , component: ComponentComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'

  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
