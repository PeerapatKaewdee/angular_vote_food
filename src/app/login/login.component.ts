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
import e from 'express';
// import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  seartID() {
    console.log('ID', this.id);
  }
  email: any = "error";
  password: any = "error";
  user: UserPostResp[] = [];
  id: any = '';
  uid: any;
  person: any[] = [];
  constructor(private http: HttpClient, private service: ServiceService) {}
  ngOnInit(): void {
    this.service.getUser((Response: any) => {
      console.log(Response);
    });
  }

  async callAip() {
    this.user = await this.service.getUser();

    console.log(this.user);
  }

  async login(email: HTMLInputElement, password: HTMLInputElement) {
    console.log('email', email.value);
    console.log('pass', password.value);

    this.user = await this.service.getUser();
    console.log(this.user);

    for (const user of this.user) {
      if (
        user.email.includes(email.value) &&
        user.pass.includes(password.value)
      ) {
        console.log(
          123,
          user.email.includes(email.value),
          user.pass.includes(password.value)
        );
        this.person.push(user);
      
        if (user.type === 1) {
          //ไปที่หน้า addMin
          console.log('user.email', user.email);
        console.log('user.pass', user.pass);
        } else {
          console.log('type', user.type);
          console.log('user.email', user.email);
          console.log('user.pass', user.pass);
          this.uid = user.uid;
          // ไปที่หน้าporfile
        }
      } else {
        console.log('login faill');

        this.email = null;
        this.password = null;
        this.uid = null;
      }
    }
    console.log('person', this.person);
  }
}
