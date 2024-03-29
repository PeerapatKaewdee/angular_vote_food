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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vote-no-user',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterModule,MatCardModule,CommonModule],
  templateUrl: './vote-no-user.component.html',
  styleUrl: './vote-no-user.component.css'
})
export class VoteNoUserComponent {
  user: UserPostResp[] = [];
  id: any;
  uid: any;
  img: any;
  img1: any;
  img2: any;
  num:any;
  foods_score: any;
  K:any;
  rA:any;
  rB:any;
  E_a:any;
  E_b:any;
  date:Date = new Date();
  person: any[] = [];

   constructor(private http: HttpClient, private service: ServiceService,private ActivatedRoute:ActivatedRoute){

    this.vote();
    // this.EloAgloliotrum(1000,1,100,0);
    // this.num = 20**0.5;
    // console.log(this.num);
    if(this.service.id){
      this.id = this.service.id;
      console.log("service.id",this.service.id);
      console.log("this.id",this.id);
    }

    
    
  }
  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('uid') || ' ';
    console.log(this.id);
    this.service.id = this.id;

    // this.service.getUser((Response: any) => {
    //   console.log(Response);
    // });
  }

  async vote(){
    this.img = await this.service.get_img_ran();
    this.img1 = this.img[0];
    this.img2 = this.img[1];
    console.log("img Ran",this.img);
    console.log("this.id",this.id);
    
  }
  // async score( fid :any){
  //   // this.foods_score = 999;
  //     console.log("fid",fid);
  //     await this.service.upscore(fid, this.foods_score);
      
  // }
  async EloAgloliotrum(fid_win: any,winner:any,numWin:any , fid_lost: any,lost:any,numlost:any) :Promise<any>{
  const  K = this.rating(winner);
  const E_a  =  1 / (1 + 10**(-(lost - winner) / 400));
  const E_b  =  1 / (1 + 10**(-(winner - lost) / 400));
  console.log("K=",K);
  // const formattedDate = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`;
  const rA = winner + (K*(numWin  - E_a));
  const rB = lost + (K*(numlost  - E_b));
  console.log("r_A",rA);
  const win_body = {
    fid:fid_win,
    date:this.date,
    score:rA
  }
  await this.service.insert_hiss(win_body);
  await this.service.upscore(fid_win, rA);
  const lose_body = {
    fid:fid_lost,
    date:this.date,
    score:rB
  }
  console.log("r_B",rB);
  await this.service.insert_hiss(lose_body);
  await this.service.upscore(fid_lost, rB);

  // location.reload();

  
  // const sA =();

}
rating(rating:any) : any{

  if(rating <=1000 ){
      return 200;
  }else if(rating>1000  &&  rating<=3000){
    return 150;

  }else if(rating>3000  &&  rating<=4000){
    return 100;

  }else if(rating>4000  &&  rating<=6000){
    return 80;

  }else if(rating>6000  &&  rating<=7000){
    return 70;

  }else if(rating>7000  &&  rating<=9000){
    return 60;

  }else{
    return 50;
  }
}
vote_A(winner: any , lost:any){

  const numwin = 1;
  const  numlost = 0;

  this.EloAgloliotrum(this.img1.fid,winner,numwin, this.img2.fid,lost,numlost);


}
vote_B(winner: any , lost:any){

  const numwin = 1;
  const  numlost = 0;

  this.EloAgloliotrum(this.img2.fid,winner,numwin, this.img1.fid,lost,numlost);



}

}
