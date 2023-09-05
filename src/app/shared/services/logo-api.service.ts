import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl:string ='https//logo.clearbit.com';

  constructor() { }

  getUrl(source:any){
    return `${this.baseUrl}/${new URL(source.url).host}`;
  }
}
