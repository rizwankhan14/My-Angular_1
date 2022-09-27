import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

//Cart count
import { Cart1Service } from '../cart1.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Dependency injection
  constructor(private authService:UserService,private cartSvc:Cart1Service) { }
  auth:boolean=false;
  //Add to cart
  cartCount: number=0;
  //STRING INTERPOLATION
  
  title = 'CARS';

   public logo="https://thumbs.dreamstime.com/b/car-modern-logo-car-logo-black-background-100813542.jpg";
  //Accessing the Search Component
  //Property
  productentered: string=' '  
  
  
  
  //EVENT BINDING
  onSearch()
  {
    alert("Update");
  }


  
  //Event
  search_product(product_name:string):void{ 
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; 
    console.log(product_name)
  }

  //Auth Service
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside header component: ' + data);
        this.auth = data;
      }
    );
    
    //Cart count
    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     ) 
  }

}
  


  