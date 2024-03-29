import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { OnInit } from '@angular/core';
import { UserPostResp } from '../model/user_res';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import e from 'express';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
// import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  email!: any;
  password!: any;
  user: UserPostResp[] = [];
  id: any = '';
  uid: any;
  person: any;
  // router: any;
  constructor(
    private http: HttpClient,
    private service: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem('uid')) {
      this.router.navigateByUrl('/profile');
    }
    if (localStorage.getItem('AddMin')) {
      this.router.navigateByUrl('/addmin');
    }
  }

  async login() {
    // console.log('email', this.email);
    // console.log('pass', this.password);

    this.user = await this.service.getUser();
    // console.log(this.user);
    if (this.email && this.password) {
      console.log('email', this.email);
      console.log('pass', this.password);
      for (let user of this.user) {
        if (user.email.includes(this.email) && user.pass.includes(this.password)){
          if (user.type === 1) {
            this.uid = user.uid;
            localStorage.setItem('AddMin', this.uid);
            // this.service.id = localStorage.getItem("AddMin");
            console.log(localStorage.getItem('AddMin'));
            this.router.navigateByUrl('/addmin');
            //   console.log('user.email', user.email);
            // console.log('user.pass', user.pass);
          } else if (user.type === 0) {
            // console.log('user.email', user.email);
            // console.log('user.pass', user.pass);
            // console.log('type', user.type);
            // const uid = user.uid as string;
            // sessionStorage.setItem("uid", user.uid.toString());

            // console.log("uid = ", sessionStorage.getItem("uid") );
            //  this.id = this.service.getUserByID(sessionStorage.getItem("uid") )
            // console.log("this.user",this.person);

            this.uid = user.uid;
            localStorage.setItem('uid', this.uid);
            this.service.id = localStorage.getItem('uid');
            console.log(localStorage.getItem('uid'));
            this.router.navigateByUrl('/profile');

            // console.log(parseInt(this.id)+1);
            // console.log("uid",this.uid);
            // this.person.push(user);

            // ไปที่หน้าporfile
          }
        }else{
          console.log('login faill');
        }
      }
    } else {
      console.log("email",this.email);
      console.log("pass",this.password);
      
    }
  }
}
