
import { HttpClient } from '@angular/common/http';
import { Constants } from './config/component';
import { Injectable } from '@angular/core';
import { UserPostResp } from '../app/model/user_res';
import { RankingPostResp } from '../app/model/user_res';
import { profile } from '../app/model/user_res';
import { foodsImg } from '../app/model/user_res';
import { foodsData } from '../app/model/user_res';
import { foods_day_score } from '../app/model/user_res';
import { lastValueFrom } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  id: any;
  constructor(private http :HttpClient ,private constants :Constants ) { }


  public async getUser() {
    const url = this.constants.API_ENDPOINT + '/user';
    const response = await lastValueFrom(this.http.get(url));
    return response as UserPostResp[];
  }
  public async getUserAbbmin() {
    const url = this.constants.API_ENDPOINT + '/user/addmin';
    const response = await lastValueFrom(this.http.get(url));
    return response as UserPostResp[];
  }
  public async get_foods_img(id:any) {
    // const url = this.constants.API_ENDPOINT + '/user/foods/';
    // if (id) {
      const url = this.constants.API_ENDPOINT + '/user/foods/' + id;
    // }
    const response = await lastValueFrom(this.http.get(url));
    return response as UserPostResp[];
  }
  public async get_img_ran(){
    const url = this.constants.API_ENDPOINT +'/foods/random';
    const response = await lastValueFrom(this.http.get(url));
    return response as UserPostResp[];
   }
   public async get_foodsById(id:any){
    const url = this.constants.API_ENDPOINT +'/foods/'+id;
    const response = await lastValueFrom(this.http.get(url));
    return response as UserPostResp[];
   }
   public async upscore(fid :any , score:any){

      const url = this.constants.API_ENDPOINT + '/foods/score?'+'fid='+fid+'&score='+score;
      const response = await lastValueFrom(this.http.put(url,{}));
      return response as UserPostResp[];
   }
   public async signUp(body :any){
      const url =  this.constants.API_ENDPOINT + '/user/insert';
      const  response = await  lastValueFrom(this.http.post(url,JSON.parse(JSON.stringify(body))));
      return response as UserPostResp[];

   }
   public async get_new_user(){
    const url = this.constants.API_ENDPOINT +'/user/newUser';
    const response = await lastValueFrom(this.http.get(url));
    return response as UserPostResp[];
   }

   public  async getUserByID(id : any){
    const url = this.constants.API_ENDPOINT+'/user/'+id ;
    const response = await lastValueFrom(this.http.get(url));
    return response  as UserPostResp[];

   }
   public async post_upfoods_img(body : FormData){
    const url = this.constants.API_ENDPOINT + '/uplaods/';
    const response = await lastValueFrom(this.http.post(url,body));
    return response as foodsImg[];
   }
   public async put_foods_img(body : FormData){
    const url = this.constants.API_ENDPOINT + '/uplaods/foods/img';
    const response = await lastValueFrom(this.http.put(url,body));
    return response as foodsData[];
   }
   public async put_foods_data(body : any){
    const url = this.constants.API_ENDPOINT + '/foods/update/data';
    const response = await lastValueFrom(this.http.put(url,JSON.parse(JSON.stringify(body))));
    return response as foodsImg[];
   }
   public async post_upProfile_img_ById(body : FormData){
    const url = this.constants.API_ENDPOINT + '/uplaods/profile';
    const response = await lastValueFrom(this.http.put(url,body));
    return response as profile[];
   }
   public async put_data_user(body : any,id:any){
    const url = this.constants.API_ENDPOINT+'/uplaods/' + id ;
    const response = await lastValueFrom(this.http.put(url,JSON.parse(JSON.stringify(body))));
    return response  as UserPostResp[];
   }
   public async insert_hiss(body : any){
    const url =  this.constants.API_ENDPOINT + '/foods/vote';
      const  response = await  lastValueFrom(this.http.post(url,JSON.parse(JSON.stringify(body))));
      return response as UserPostResp[];
   }
   public async get_ranking(){
    const url = this.constants.API_ENDPOINT +'/ranking/hiss';
    const response = await lastValueFrom(this.http.get(url));
    return response as RankingPostResp[];
  }
  public async get_rank_day1(id:any){
    const url = this.constants.API_ENDPOINT +'/ranking/day1/' + id;
    const response = await lastValueFrom(this.http.get(url));
    return response as foods_day_score[];
   }
  public async get_rank_day2(id:any){
    const url = this.constants.API_ENDPOINT +'/ranking/day2/'  + id;
    const response = await lastValueFrom(this.http.get(url));
    return response as foods_day_score[];
   }
   public async get_rank_day3(id:any){
    const url = this.constants.API_ENDPOINT +'/ranking/day3/'  + id;
    const response = await lastValueFrom(this.http.get(url));
    return response as foods_day_score[];
   }
   public async get_rank_day4(id:any){
    const url = this.constants.API_ENDPOINT +'/ranking/day4/'  + id;
    const response = await lastValueFrom(this.http.get(url));
    return response as foods_day_score[];
   }
   public async get_rank_day5(id:any){
    const url = this.constants.API_ENDPOINT +'/ranking/day5/'  + id;
    const response = await lastValueFrom(this.http.get(url));
    return response as foods_day_score[];
   }
   public async get_rank_day6(id:any){
    const url = this.constants.API_ENDPOINT +'/ranking/day6/'  + id;
    const response = await lastValueFrom(this.http.get(url));
    return response as foods_day_score[];
   }
   public async get_rank_day7(id:any){
    const url = this.constants.API_ENDPOINT +'/ranking/day7/'  + id;
    const response = await lastValueFrom(this.http.get(url));
    return response as foods_day_score[];
   }
   public async delete_foodsImg(id:any){
    const url = this.constants.API_ENDPOINT +'/foods/delete/' + id;
    const response = await lastValueFrom(this.http.delete(url));
    return response as UserPostResp[];
   }

}
