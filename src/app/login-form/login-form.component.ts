import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  user: User;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.minLength(1), Validators.required]),
      password: new FormControl(null, [Validators.minLength(5), Validators.required])
    });
    this.userService.getUser(0).subscribe(user => this.user = user);
  }

  login():void {
    if(this.loginForm.valid){
      const user = {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value,
      }
      this.userService.searchUser(user as User).subscribe();
      
      this.router.navigate(['']);  
    }
  }
}

