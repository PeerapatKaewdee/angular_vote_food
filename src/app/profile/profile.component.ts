import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { UserPostResp } from '../model/user_res';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
// import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatCardModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  animal: any;
  name2: any;
  check: any = 0;
  user: UserPostResp[] = [];
  id: any = '';
  uid: any;
  name: any;
  person: any[] = [];
  img: any;
  imgUser: any = '';
  selectedFile: File | null = null;
  selectedFilefoods: File | null = null;

  constructor(
    private http: HttpClient,
    private service: ServiceService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    // this.id = this.service.id;
    // console.log(this.id);
    // this.id = localStorage.getItem("uid");
    // console.log("id local = ",this.id);
    // this.get_img();
  }

  ngOnInit() {
    // this.id = this.ActivatedRoute.snapshot.paramMap.get('uid') || ' ';
    this.id = localStorage.getItem('uid');
    console.log('id local = ', this.id);
    console.log('uid', this.id);
    // this.service.id = this.id;
    this.getUser();
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  async getUser() {
    console.log('service.id', this.service.id);
    this.img = await this.service.get_foods_img(this.id);
    for (let gg of this.img) {
      this.check++;
      // console.log("gg ",gg);
    }
    console.log('check ', this.check);
    // this.name = await this.service.getUserByID(this.id);
    console.log('name', this.name);

    console.log('img', this.img);

    // this.get_img();

    // this.service.getUser((Response: any) => {
    //   console.log(Response);
    // });
  }
  async callAip() {
    this.user = await this.service.getUser();

    console.log(this.user);
  }
  file(event: any) {
    const formData = new FormData();
    formData.append('file', event);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log('selectedFile1', this.selectedFile);
    this.uploadImage();
    // Optionally, you can call uploadImage() here if you want to upload the file immediately after selection
  }
  async onFileSelectedById(event: any, id: any): Promise<void> {
    this.selectedFilefoods = event.target.files[0];
    console.log('selectedFile1', this.selectedFilefoods);
    console.log('fid = ', id);

    if (this.selectedFilefoods) {
      const formData = new FormData();
      formData.append('file', this.selectedFilefoods);
      formData.append('fid', id);

      console.log('formData : 123', formData);
      // รอให้การเรียก post_upProfile() เสร็จสิ้นและรับข้อมูลที่ส่งกลับมา
      const response = await this.service.put_foods_img(formData);
      console.log('Response from server:', response);

      console.log('selectedFile2', this.selectedFilefoods);
      // location.reload();
      // ทำงานอื่นๆที่ต้องการทำหลังจากการอัปโหลดไฟล์
    }
    // Optionally, you can call uploadImage() here if you want to upload the file immediately after selection
  }
  async uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('uid', this.id);

      console.log('formData : 123', formData);

      // รอให้การเรียก post_upProfile() เสร็จสิ้นและรับข้อมูลที่ส่งกลับมา
      const response = await this.service.post_upfoods_img(formData);
      console.log('Response from server:', response);

      console.log('selectedFile2', this.selectedFile);

      // ทำงานอื่นๆที่ต้องการทำหลังจากการอัปโหลดไฟล์
    }
  }
  ranking() {
    // this.service = this.id;
    this.router.navigateByUrl('/ranking');
  }
  vote() {
    // this.service = this.id;
    this.router.navigateByUrl('/vote');
  }
  logOut() {
    localStorage.removeItem('uid');
    this.router.navigateByUrl('');
  }
}
@Component({
  selector: 'Dialog',
  templateUrl: 'Dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
