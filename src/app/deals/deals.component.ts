import { Component, Input, OnInit } from '@angular/core';
//Add to Cart
import { Cart1Service } from '../cart1.service';
import { Cart1item } from '../cart1item';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

 //constructor injection
 constructor(private cartsvc:Cart1Service) { }
 //Add to cart
 cart:Cart1item={
   pid:0,
   pname:'',
   pdescription:'',
   price:0,
   img:'',
   quantity:1,
   totalPrice:1    
 }
 quantity:number=1;

 addToCart(product:any){
   this.cart.pname=product.pname;
   this.cart.pdescription=product.pdescription;
   this.cart.price=product.price;
   this.cart.img=product.img;
   this.cart.price=product.price;
   this.cart.totalPrice=product.totalPrice;
   this.cart.quantity=this.quantity;
   this.cart.pid=product.id;
   this.cartsvc.addToCart(this.cart);
   console.log(product.id);
   const Toast = Swal.mixin({
     toast: true,
     position: 'top',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
   })

   Toast.fire({
     icon: 'success',
     title: 'Item added successfully'
   })
   this.cartsvc.getCount();
 }
 //Input Class Decorator
 @Input()product:any

 ngOnInit(): void {
 }
 //Toggle effect to show and hide the pdescription and price
 //Property for toggle effect
 productDetail=false;
 //Event to perform the toggle effect
 showproductDetailsToggle()
 {
   this.productDetail=!this.productDetail;
 }
 //function to toggle between the span content from + to - and vice versa
 //and bind the function to [ngClass]
 toggleContent(){
   var content='';
   if(this.productDetail){
     content='fa fa-plus';
   }
   else{
     content='fa fa-minus';
   }
   return content;
 }

}
