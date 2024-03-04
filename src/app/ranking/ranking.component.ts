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
  ranking:any;

  constructor(private http: HttpClient, private service: ServiceService,private ActivatedRoute:ActivatedRoute){
   this.id =  this.service.id;
   this.getRanking();
   console.log("service.id",this.service.id);
   console.log("this.id",this.id);
   
  }
  ngOnInit(): void {
    // this.id = this.ActivatedRoute.snapshot.paramMap.get(this.uid);
    // console.log(this.id);
    this.service.getUser((Response: any) => {
      console.log(Response);
    });
  }

  async getRanking() {
    this.ranking = await this.service.getRanking();
    console.log("ranking",this.ranking);
  }

}
