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
  id: number;
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
    if(localStorage.getItem("uid")){
    
    }else{
      this.router.navigateByUrl('/');
    }
    // this.id = this.ActivatedRoute.snapshot.paramMap.get('uid') || ' ';
    this.id = localStorage.getItem('uid');
    console.log('id local = ', this.id);
    console.log('uid', this.id);
    // this.service.id = this.id;
    this.getUser();
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string , id:any): void {

    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      data: {id: id},

      width: '450px',
      height: '480px',
    });

    // console.log(id);
    
  }
  openDialog2(enterAnimationDuration: string, exitAnimationDuration: string , id:any): void {

    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog2, {
      data: {id: id},
      width: '250px',
    });

    // console.log(id);
    
  }
  async getUser() {
    // console.log('service.id', this.service.id);
    this.user = await this.service.getUserByID(this.id);
    console.log("user",this.user);
    
    this.img = await this.service.get_foods_img(this.id);
    for (let gg of this.img) {
      this.check++;
      // console.log("gg ",gg);
    }
    console.log('check ', this.check);
    // this.name = await this.service.getUserByID(this.id);
    console.log('name', this.name)
    console.log('img', this.img);

    // this.get_img();

    // this.service.getUser((Response: any) => {
    //   console.log(Response);
    // });
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
  graph(id:any){
    localStorage.setItem("fid",id);
    console.log("fid graph",id);
    this.router.navigateByUrl('/graph');
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
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,CommonModule,FormsModule,MatInputModule],
})
export class DialogAnimationsExampleDialog{
  name!:any;
  detail!:any;
  img!:any | undefined;
  user:any;
  foods:any;
  id:any;
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,private service:ServiceService,@Inject(MAT_DIALOG_DATA) public data: DialogData,){
    this.food_data();
  }

  async edit(id:any) : Promise<void> {
  console.log(this.name);
  console.log("ID dialog123",this.id);
  this.foodsBody();
  if (this.img) {
    const formData = new FormData();
    formData.append("file", this.img);
    formData.append("fid", this.id);

    console.log('fid = ', this.id);
    console.log('formData : 123', formData);
    // รอให้การเรียก put_upProfile() เสร็จสิ้นและรับข้อมูลที่ส่งกลับมา
    const response = await this.service.put_foods_img(formData);
    console.log('Response foods img from server:', response);

    console.log('selectedFile2', this.img);
    // location.reload();
    // ทำงานอื่นๆที่ต้องการทำหลังจากการอัปโหลดไฟล์
  }
  // location.reload();
   
  }
  async foodsBody(){
    const body = {
      name: this.name,
      descroption:  this.detail,
      fid:  this.id
    }
    console.log("foods body",body);
    const respon =  await this.service.put_foods_data(body);
    console.log("repon foods daata",respon);
    
  }
  async food_data(){
    this.id = this.data.id;
    this.foods = await this.service.get_foodsById(this.data.id);
    console.log("foods Data ", this.foods);
    for(let food of this.foods){
      this.name = food.name;
      this.detail = food.descroption;
    }
    console.log("ID dialog123",this.id);
    console.log("name",this.name);
    
  }
  async onFileSelectedById(event: any){
    this.img = event.target.files[0];
    console.log('selectedFile1', this.img);
    // Optionally, you can call uploadImage() here if you want to upload the file immediately after selection
  }

}
@Component({
  selector: 'delete',
  templateUrl: 'delete.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,CommonModule,FormsModule],
})
export class DialogAnimationsExampleDialog2{

  foods:any;
  id:any;
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog2>,private service:ServiceService,@Inject(MAT_DIALOG_DATA) public data: DialogData,){
      this.id = this.data.id;
  }

  async delete(){  
   console.log("ID dialog",this.data.id);
   console.log("delete ID",this.id);
   
  this.service.delete_foodsImg(this.id);
  // location.reload();
  }

}
