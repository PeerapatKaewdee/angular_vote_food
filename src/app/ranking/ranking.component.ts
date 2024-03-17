import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { ServiceService } from '../service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserPostResp } from '../model/user_res';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { Router } from 'express';
@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterModule,MatCardModule,HttpClientModule,CommonModule],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {
  user: UserPostResp[] = [];
  id: any = '';
  uid: any;
  data: any[] = [];
  ranking: any;

  constructor(private http: HttpClient, private service: ServiceService,private ActivatedRoute:ActivatedRoute,private router : Router){
   this.id =  this.service.id;
   console.log("service.id",this.service.id);
   console.log("this.id",this.id);
   
  }
  ngOnInit(): void {

    // this.id = this.ActivatedRoute.snapshot.paramMap.get(this.uid);
    // console.log(this.id);
    this.Get_ranking();
    console.log(this.data);
    
    this.service.getUser((Response: any) => {
      console.log(Response);
    });
  }

  async callAip() {
    this.user = await this.service.getUser();
    console.log(this.user);
  }
  profile(){
    this.service.id = this.id;
    this.router.navigateByUrl('/profile/');
  }
    
  vote(){
    this.service.id = this.id;
    this.router.navigateByUrl('/vote/');
  }
  async Get_ranking(){
    this.ranking = await this.service.get_ranking();
    console.log(this.ranking);
    const daat = JSON.stringify(this.ranking);
    console.log(this.data);
    
    for(let data of this.ranking){
      this.data.push(data);
    }
  }
    

}
