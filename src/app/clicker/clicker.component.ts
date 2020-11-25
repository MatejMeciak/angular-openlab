import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {

  money: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.money++;
  }

}
