import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  currentBeverage= " "
  beverage =['Updated Form 20, 21, 22 This is the application for the registration of a motor vehicle',
  'Attested copy of the valid insurance policy','Identity proof of the car owner',
                'The owner’s proof of residence','PAN Card, Form 60, or Form 61, whichever is applicable',
                'Challan receipt','Chassis pencil print'];

  addBeverage(newBeverage: string){
    this.beverage.push(newBeverage);
 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
