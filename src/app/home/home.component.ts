import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = 'bHAwna';
  amount: number = 199777;
  dateOfBirth = new Date();

  constructor() { }

  ngOnInit() {
  }

}
