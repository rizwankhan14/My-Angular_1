import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { IndianComponent } from './indian/indian.component';
import { ForeignComponent } from './foreign/foreign.component';
import { ForeignMIDComponent } from './foreign-mid/foreign-mid.component';
import { ForeignVIDOComponent } from './foreign-vido/foreign-vido.component';
import { BookingComponent } from './booking/booking.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { CartComponent } from './cart/cart.component';
import { Squarepipe } from './squarepipe';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { RegisterComponent } from './register/register.component';
import { DealsComponent } from './deals/deals.component';
import { CardealsComponent } from './cardeals/cardeals.component';
import { ParentComponent } from './parent/parent.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardsComponent,
    Squarepipe,
    SearchComponent,
    FooterComponent,
    AboutComponent,
    ProductsComponent,
    IndianComponent,
    ForeignComponent,
    ForeignMIDComponent,
    ForeignVIDOComponent,
    BookingComponent,
    ReactiveformsComponent,
    CounterComponent,
    CounterchildComponent,
    CartComponent,
    LoginComponent,
    CartItemsComponent,
    RegisterComponent,
    DealsComponent,
    CardealsComponent,
    ParentComponent
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
