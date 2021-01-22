import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  title = 'Tour of Heroes';

  hide:boolean = false;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    if (this.userService.isLogged){
      this.hide = this.userService.isLogged;
    } 
  }

}
