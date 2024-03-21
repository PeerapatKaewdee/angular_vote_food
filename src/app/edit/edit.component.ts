import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import e from 'express';
@Component({
  selector: 'app-edit',
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
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  name!: any;
  lastname!: any;
  email!: any;
  pass!: any;
  selectedFile: any;
  id: any;
  data: any = '';

  constructor(
    private http: HttpClient,
    private service: ServiceService,
    private router: Router
  ) {
    this.id = this.service.id;
    console.log(this.id);
    // this.user();

    // this.get_img();
  }
  ngOnInit(): void {
    console.log('oninit id', this.id);
    // this.service.id = this.id;
    this.user();
  }
  goBack() {
    // Implementing window.back to go back to the previous location
    window.history.back();
  }
  profile() {
    this.service.id = this.id;
    this.router.navigateByUrl('/profile/');
  }
  confrim() {
    console.log('name', this.name);
    console.log('lastName', this.lastname);
    console.log('email', this.email);
    console.log('pass', this.pass);
    // console.log("file",file);
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log('selectedFile1', this.selectedFile);
    // Optionally, you can call uploadImage() here if you want to upload the file immediately after selection
  }
  async user() {
    this.data = await this.service.getUserByID(this.id);
    for (let data of this.data) {
      this.name = data.name;
      this.lastname = data.last_name;
      this.email = data.email;
      this.pass = data.pass;
    }

    console.log(this.data);
    console.log(this.data.name);
    console.log(this.name);
  }
}
