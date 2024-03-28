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
@Component({
  selector: 'app-addmin',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterModule,MatCardModule ,HttpClientModule,CommonModule],
  templateUrl: './addmin.component.html',
  styleUrl: './addmin.component.css'
})
export class AddminComponent {
  id: any = '';
  uid: any;
  name :any ;
  addmin:any ;
  user: UserPostResp[] = [];

  constructor(private http: HttpClient, private service: ServiceService,private router:Router){}


  async ngOnInit(){
    if(localStorage.getItem("Addmin")){
     
    }else{
      this.router.navigateByUrl('/');
    }
  // this.get_img();    
  this.id = localStorage.getItem("AddMin");
  console.log("addmin uid",this.id);
  
  this.addmin = await this.service.getUserByID(this.id);
  console.log("addmin",this.addmin);
   
  this.user = await this.service.getUser();
  console.log("user",this.user);
    
  }
  viewprofile(){
    this.router.navigateByUrl('/viewprofile');
  }
  logOut(){
    localStorage.removeItem('uid');
    this.router.navigateByUrl('');
  }
}
