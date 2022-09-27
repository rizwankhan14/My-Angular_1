import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date_today: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.date_today=new Date().toDateString();
  }

}
