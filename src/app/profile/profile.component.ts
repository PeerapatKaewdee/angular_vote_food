import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { UserPostResp } from '../model/user_res';
import { ActivatedRoute } from '@angular/router';
// import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterModule,MatCardModule ,HttpClientModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {


  user: UserPostResp[] = [];
  id: any = '';
  uid: any;
  name :any ;
  person: any[] = [];
  img:any;
  imgUser: any ='';
  selectedFile: File | null = null;
  constructor(private http: HttpClient, private service: ServiceService,private ActivatedRoute :ActivatedRoute, private router : Router) {
    this.id = this.service.id;
    console.log(this.id);
    
  // this.get_img();    
  }
  
  async ngOnInit(): Promise<void> {
    // this.id = this.ActivatedRoute.snapshot.paramMap.get('uid') || ' ';

    console.log("uid",this.id);
    this.service.id = this.id;
    console.log("service.id",this.service.id);
    this.img = await this.service.get_foods_img(this.id);
    // this.name = await this.service.getUserByID(this.id);
    console.log("name",this.name);
    
    console.log("img",this.img);
    
  // this.get_img();    
    
    // this.service.getUser((Response: any) => {
    //   console.log(Response);
    // });
  }

  async callAip() {
    this.user = await this.service.getUser();

    console.log(this.user);
  }
  file(event:any){

    const formData = new  FormData();
    formData.append('file', event);

  }
  
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log("selectedFile1", this.selectedFile);
    this.uploadImage()
    // Optionally, you can call uploadImage() here if you want to upload the file immediately after selection
  }
  async uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('uid', this.id);

      console.log("formData : 123", formData);

      // รอให้การเรียก post_upProfile() เสร็จสิ้นและรับข้อมูลที่ส่งกลับมา
      const response = await this.service.post_upProfile(formData);
      console.log("Response from server:", response);

      console.log("selectedFile2", this.selectedFile);

      // ทำงานอื่นๆที่ต้องการทำหลังจากการอัปโหลดไฟล์
  }
}
ranking(){
  this.service = this.id;
  this.router.navigateByUrl('/ranking/');
}
  
vote(){
  this.service = this.id;
  this.router.navigateByUrl('/vote/');
}
  
  
  
  

}