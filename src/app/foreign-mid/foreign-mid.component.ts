import { Component, OnInit } from '@angular/core';
import * as wm from "../foreign/foreign.json"

@Component({
  selector: 'app-foreign-mid',
  templateUrl: './foreign-mid.component.html',
  styleUrls: ['./foreign-mid.component.css']
})
export class ForeignMIDComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Fetch the data from foreign.json 
  foreign:any=(wm as any).default;

  //Toggle effect 
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
