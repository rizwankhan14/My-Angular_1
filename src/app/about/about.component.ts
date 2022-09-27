import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  date_today: string | undefined;

  @Input() beverage = "tea";     //parent to child
  
  @Output() newBeverageEvent = new EventEmitter<string>();

  constructor() { }
  
  
 

 
  

  ngOnInit(): void {
   
    this.date_today=new Date().toDateString();
   
  }
  addNewBeverage(value: string){
    this.newBeverageEvent.emit(value)
    }
}
//ngClass
class products{
  blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}
