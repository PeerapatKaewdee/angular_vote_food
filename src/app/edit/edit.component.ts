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
  selectedFile: File | null = null;
  id: any;
  data: any = '';

  constructor(
    private http: HttpClient,
    private service: ServiceService,
    private router: Router
  ) {
    // this.user();

    // this.get_img();
  }
  ngOnInit(): void {
    this.id = localStorage.getItem('uid');
    console.log('id local = ', this.id);
    console.log('uid', this.id);
    // this.service.id = this.id;
    // this.getUser();
    this.user();
  }

  async confrim() {
    console.log('name', this.name);
    console.log('lastName', this.lastname);
    console.log('email', this.email);
    console.log('pass', this.pass);

    console.log('file', this.selectedFile);
    const body = {
      name: this.name,
      email: this.email,
      pass: this.pass,
      last_name: this.lastname,
    };
    await this.service.put_data_user(body, this.id);
    this.uploadImage();
    this.profile();
    // console.log("file",file);
  }
  async onFileSelected(event: any) {
    if (event) {
      this.selectedFile = event.target.files[0];
      console.log('selectedFile1', this.selectedFile);
    } else {
      console.log('selectedFile 123', this.selectedFile);
    }
    // Optionally, you can call uploadImage() here if you want to upload the file immediately after selection
  }
  async uploadImage() {
    if (this.selectedFile != undefined || this.selectedFile != null) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('uid', this.id);
      console.log('formData : 123', formData);
      // รอให้การเรียก post_upProfile() เสร็จสิ้นและรับข้อมูลที่ส่งกลับมา
      const response = await await this.service.post_upProfile_img_ById(
        formData
      );
      console.log('Response from server:', response);
      console.log('selectedFile2', this.selectedFile);
      // ทำงานอื่นๆที่ต้องการทำหลังจากการอัปโหลดไฟล์
    } else {
      this.selectedFile = null;
    }
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
  profile() {
    this.service.id = this.id;
    this.router.navigateByUrl('/profile');
    location.reload();
  }
}
