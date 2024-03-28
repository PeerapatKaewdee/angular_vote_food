import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../service.service';
import {UserPostResp} from "../model/user_res";
// import { MatFormField } from '@angular/material/input';
// import { MatFormFieldControl } from '@angular/material/form-field';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HttpClientModule,FormsModule, CommonModule,RouterModule ,MatToolbarModule,MatButtonModule,MatInputModule,MatIconModule,MatCardModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
id:any;
email: any ;
pass: any ;
pass2: any ;
name: any='';
// country: any;

  constructor(private http:HttpClient,private service:ServiceService,private router:Router){
    // console.log("country",this.country);
    // this.profileid();
  }
  async sigup(){
    if(this.pass == this.pass2){

      const body = {
        name: this.name,
        type:0,
        email: this.email,
        pass: this.pass
      }
      console.log("body",body);
      console.log(this.id);
      const test = await this.service.signUp(body);
      console.log("test",test);
      this.profileid();
    
      
      
      // await this.service.signUp(body);
    }else{
      this.pass2 = '';
    }
}
  async profileid(){
   this.id = await this.service.get_new_user();
   console.log("uid",this.id[0].uid);
   
   localStorage.setItem('uid',this.id[0].uid);
   this.router.navigateByUrl('/profile');

}
}
