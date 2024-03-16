import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
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
  user: UserPostResp[] = [];
  id: any = '';
  uid: any;
  name :any ;
  person: any[] = [];
  img:any;

  constructor(private http: HttpClient, private service: ServiceService,private ActivatedRoute :ActivatedRoute){}


  async ngOnInit(): Promise<void> {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('uid') || ' ';

    console.log("uid",this.id);
    this.service.id = this.id;
    console.log("service.id",this.service.id);
    this.img = await this.service.get_foods_img(this.id);
    this.name = await this.service.getUserByID(this.id);
    console.log("name",this.name);
    
    console.log("img",this.img);
    
  // this.get_img();    
    
    this.service.getUser((Response: any) => {
      console.log(Response);
    });
  }

  async callAip() {
    this.user = await this.service.getUser();

    console.log(this.user);
  }


  
}
