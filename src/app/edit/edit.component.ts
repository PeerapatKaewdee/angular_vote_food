import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import e from 'express';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ RouterModule ,MatFormFieldModule,MatToolbarModule,MatButtonModule,MatInputModule,MatIconModule,MatCardModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent {

id: any;

  constructor(private http: HttpClient, private service: ServiceService, private router : Router) {
    this.id = this.service.id;
    console.log(this.id);
    
  // this.get_img();    
  }
  goBack() {
    // Implementing window.back to go back to the previous location
    window.history.back();
  }
  profile(){
    this.service.id = this.id;
    this.router.navigateByUrl('/profile/');
  }
  confrim(name:any,lastname:any,email:any,pass:any) {
    console.log("name",name);
    console.log("lastName",lastname);
    console.log("email",email);
    console.log("pass",pass);
    // console.log("file",file);
    
    throw new Error('Method not implemented.');
    }
    vote(){

    }

}
