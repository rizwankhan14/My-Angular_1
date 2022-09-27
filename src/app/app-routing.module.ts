import { BookingComponent } from './booking/booking.component';
import { ForeignComponent } from './foreign/foreign.component';
import { IndianComponent } from './indian/indian.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { RegisterComponent } from './register/register.component';
import { CardealsComponent } from './cardeals/cardeals.component';
import { ParentComponent } from './parent/parent.component';


//Auth Guard for productdetails component
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'Cards',component:CardsComponent},
  {path:'about',component:AboutComponent},
  {path:'indian',component:IndianComponent},
  {path:'foreign',component:ForeignComponent},
  {path:'booking',component:BookingComponent},
  {path:'cart',component:CartComponent},
  {path:'cartitem',component:CartItemsComponent},
  {path:'register',component:RegisterComponent},
  {path:'deals',component:CardealsComponent},
  {path:'parent',component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
