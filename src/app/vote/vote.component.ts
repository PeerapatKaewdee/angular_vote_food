import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { ServiceService } from '../service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserPostResp } from '../model/user_res';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterModule,MatCardModule,HttpClientModule,CommonModule],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css'
})
export class VoteComponent {
  user: UserPostResp[] = [];
  id: any;
  uid: any;
  img: any;
  img1: any;
  img2: any;
  num:any = 0;
  foods_score: any = 0;
  K:any = 0;
  rA:any = 0;
  rB:any = 0;
  E_a:any = 0;
  E_b:any = 0;
  date :Date = new Date();
  person: any[] = [];

   constructor(private http: HttpClient, private service: ServiceService,private ActivatedRoute:ActivatedRoute,private router : Router){

    this.vote();
    // this.EloAgloliotrum(1000,1,100,0);
    // this.num = 20**0.5;
    // console.log(this.num);
    // if(this.service.id){
    //   this.id = this.service.id;
    //   console.log("service.id_vote",this.service.id);
    //   console.log("this.id_vote",this.id);
    // }
    
    
  }
  ngOnInit(): void {
    if(localStorage.getItem("uid")){
     
    }else{
      this.router.navigateByUrl('/');
    }
    this.id = localStorage.getItem("uid");
    console.log("id local = ",this.id);
    console.log("uid",this.id);
    // this.service.id = this.id;
    console.log(this.id);
    // this.service.id = this.id;
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
    this.K = this.rating(winner);
  this.E_a  =  1 / (1 + 10**(-(lost - winner) / 400));
  this.E_b  =  1 / (1 + 10**(-(winner - lost) / 400));
  console.log("K=",this.K);

  this.rA = winner + (this.K*(numWin  - this.E_a));
  this.rB = lost + (this.K*(numlost  - this.E_b));
  const formattedDate = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`;
  console.log("r_A",this.rA);
  console.log("fid_win",fid_win);
  const win_body = {
    fid:fid_win,
    date:formattedDate,
    score:this.rA
  }
  await this.service.insert_hiss(win_body);
  await this.service.upscore(fid_win, this.rA);
  const lose_body = {
    fid:fid_lost,
    date:formattedDate,
    score:this.rB
  }
  console.log("r_B",this.rB);
  console.log("fid_lost",fid_lost);
  await this.service.insert_hiss(lose_body);
  await this.service.upscore(fid_lost, this.rB);
  // const  R_b = 1400 + (20 * (0 - 0.427));
  // console.log("R-b",R_b);

  // location.reload();

  
  // const sA =();

}
rating(rating:any) : any{

  if(rating <= 1000 ){
      return 90;
  }else if(rating>1000  &&  rating<=3000){
    return 80;

  }else if(rating>3000  &&  rating<=4000){
    return 70;

  }else if(rating>4000  &&  rating<=6000){
    return 60;

  }else if(rating>6000  &&  rating<=7000){
    return 50;

  }else if(rating>7000  &&  rating<=9000){
    return 45;

  }else{
    return 30;
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
profile(){
  this.service.id = this.id;
  console.log(this.service.id);
  this.router.navigateByUrl('/profile');
}
ranking(){
  this.service = this.id;
  this.router.navigateByUrl('/ranking');
}
logOut(){
  localStorage.removeItem('uid');
  this.router.navigateByUrl('');
}

}
