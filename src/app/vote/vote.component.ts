import {Component} from '@angular/core';
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
  selector: 'app-vote',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterModule,MatCardModule,HttpClientModule],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css'
})
export class VoteComponent {
  user: UserPostResp[] = [];
  id: any = '';
  uid: any;
  img: any;
  img1: any;
  img2: any;
  foods_score: any;
  person: any[] = [];

   constructor(private http: HttpClient, private service: ServiceService,private ActivatedRoute:ActivatedRoute){

    // this.vote();
  
    this.id = this.service.id;
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

  async callAip() {
    this.user = await this.service.getUser();

    console.log(this.user);
  }
  // async vote(){
  //   this.img = await this.service.get_img_ran();
  //   this.img1 = this.img[0];
  //   this.img2 = this.img[1];
  //   console.log("img Ran",this.img);
    
  // }
  // async score( fid :any){
  //   this.foods_score = 999;
  //     console.log("fid",fid);
  //     await this.service.upscore(fid, this.foods_score);
      
  // }


}
