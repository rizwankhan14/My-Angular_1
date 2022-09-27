import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals/deals.json"


@Component({
  selector: 'app-cardeals',
  templateUrl: './cardeals.component.html',
  styleUrls: ['./cardeals.component.css']
})
export class CardealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;

}
