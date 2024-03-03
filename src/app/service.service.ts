
import { HttpClient } from '@angular/common/http';
import { Constants } from './config/component';
import { Injectable } from '@angular/core';
import { UserPostResp } from '../app/model/user_res';
import { lastValueFrom } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  id: any;
  constructor(private http :HttpClient ,private constants :Constants ) { }


  public async getUser(options?: any) {
    const url = this.constants.API_ENDPOINT + '/user';
    if (options) {
      const url = this.constants.API_ENDPOINT + '/user' + options;
    }
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
   public async upscore(fid :any , score:any){

      const url = this.constants.API_ENDPOINT + '/foods/score?'+'fid='+fid+'&score='+score;
      const response = await lastValueFrom(this.http.put(url,{}));
      return response as UserPostResp[];
   }
}
