import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//modulos
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home/home.component';
import { ProductListComponent } from './product-list/components/product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/components/product-detail/product-detail.component';
import { HeaderComponent } from './shared/header/header/header.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { ContactComponent } from './shared/contact/contact/contact.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { BannerComponent } from './home/components/banner/banner.component';
import { TestimonialComponent } from './home/components/testimonial/testimonial.component';
import { BlogComponent } from './home/components/blog/blog.component';
import { WelcomeComponent } from './home/components/welcome/welcome.component';
import { ReviewComponent } from './product-detail/components/review/review.component';
import { ComponentComponent } from './contact/component/component.component';
import { OptionsComponent } from './shared/header/options/options.component';
import { CardComponent } from './product-list/components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CartComponent,
    BannerComponent,
    TestimonialComponent,
    BlogComponent,
    WelcomeComponent,
    ReviewComponent,
    ComponentComponent,
    OptionsComponent,
    CardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
