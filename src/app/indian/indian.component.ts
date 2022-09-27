import { Component, OnInit } from '@angular/core';
import * as indian from "../data/indian.json";

@Component({
  selector: 'app-indian',
  templateUrl: './indian.component.html',
  styleUrls: ['./indian.component.css']
})
export class IndianComponent implements OnInit {

  constructor() { }

  ProductDetails = [
   
    {
      
      "status": "Active",
      "color": "green"
    },
    
    
    {
     
      "status": "InActive",
      "color": "yellow"
    },
    
    {
     
      "status": "Out of Stock",
      "color": "red"
    }
  ]

  ngOnInit(): void {
  }

  //Fetch the data from indian.json using the alias
  car:any=(indian as any).default;

  //Toggle effect to show and hide the description
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
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
}


