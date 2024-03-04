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
import { take } from 'rxjs';
<<<<<<< HEAD
import { tick } from '@angular/core/testing';
=======
>>>>>>> 5def465052ae10f45bd3106f7cbd7300b34a7b7a
@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterModule,MatCardModule,HttpClientModule],
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
  num:any;
  foods_score: any;

  person: any[] = [];

   constructor(private http: HttpClient, private service: ServiceService,private ActivatedRoute:ActivatedRoute){

    this.vote();
<<<<<<< HEAD
    // this.EloAgloliotrum(1000,1,100,0);
    // this.num = 20**0.5;
    // console.log(this.num);
    if(this.service.id){
      this.id = this.service.id;
      console.log("service.id",this.service.id);
      console.log("this.id",this.id);
    }
=======
    this.EloAgloliotrum(1000,1,100,0);
    this.num = 20**0.5;
    console.log(this.num);
    
    this.id = this.service.id;
    console.log("service.id",this.service.id);
    console.log("this.id",this.id);
>>>>>>> 5def465052ae10f45bd3106f7cbd7300b34a7b7a

    
    
  }
  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('uid') || ' ';
    console.log(this.id);
    this.service.id = this.id;

    // this.service.getUser((Response: any) => {
    //   console.log(Response);
    // });
  }

<<<<<<< HEAD
=======
  async callAip() {
    this.user = await this.service.getUser();

    console.log(this.user);
  }
>>>>>>> 5def465052ae10f45bd3106f7cbd7300b34a7b7a
  async vote(){
    this.img = await this.service.get_img_ran();
    this.img1 = this.img[0];
    this.img2 = this.img[1];
    console.log("img Ran",this.img);
<<<<<<< HEAD
    console.log("this.id",this.id);
=======
>>>>>>> 5def465052ae10f45bd3106f7cbd7300b34a7b7a
    
  }
  async score( fid :any){
    this.foods_score = 999;
      console.log("fid",fid);
      await this.service.upscore(fid, this.foods_score);
      
  }
<<<<<<< HEAD
  async EloAgloliotrum(fid_win: any,winner:any,numWin:any , fid_lost: any,lost:any,numlost:any) :Promise<any>{
  const  K = this.rating(winner);
  const E_a  =  1 / (1 + 10**(-(lost - winner) / 400));
  const E_b  =  1 / (1 + 10**(-(winner - lost) / 400));
=======
EloAgloliotrum(winner:any,numWin:any , lost:any,numlost:any){
  const  K = this.rating(winner);
  const E_a  =  1 / (1 + 10**(-(winner - lost) / 400));
  const E_b  =  1 / (1 + 10**(-(lost - winner) / 400));
>>>>>>> 5def465052ae10f45bd3106f7cbd7300b34a7b7a
  console.log("K=",K);
  const rA = winner + (K**(numWin  - E_a));
  const rB = winner + (K**(numlost  - E_b));
  console.log("r_A",rA);
<<<<<<< HEAD
  await this.service.upscore(fid_win, rA);
  console.log("r_B",rB);
  await this.service.upscore(fid_lost, rB);

  // location.reload();

=======
  console.log("r_B",rB);
  
>>>>>>> 5def465052ae10f45bd3106f7cbd7300b34a7b7a
  
  // const sA =();

}
rating(rating:any) : any{

  if(rating <=100 ){
<<<<<<< HEAD
      return 600;
  }else if(rating>100  &&  rating<=300){
    return 400;

  }else if(rating>300  &&  rating<=400){
    return 300;
=======
      return 300;
  }else if(rating>100  &&  rating<=300){
    return 250;

  }else if(rating>300  &&  rating<=400){
    return 230;
>>>>>>> 5def465052ae10f45bd3106f7cbd7300b34a7b7a

  }else if(rating>400  &&  rating<=600){
    return 200;

  }else if(rating>600  &&  rating<=700){
    return 190;

  }else if(rating>700  &&  rating<=900){
    return 180;

  }else{
    return 150;
  }
}
<<<<<<< HEAD
vote_A(winner: any , lost:any){

  const numwin = 1;
  const  numlost = 0;

  this.EloAgloliotrum(this.img1.fid,winner,numwin, this.img2.fid,lost,numlost);
=======
>>>>>>> 5def465052ae10f45bd3106f7cbd7300b34a7b7a


}
vote_B(winner: any , lost:any){

  const numwin = 1;
  const  numlost = 0;

  this.EloAgloliotrum(this.img2.fid,winner,numwin, this.img1.fid,lost,numlost);



}

}
