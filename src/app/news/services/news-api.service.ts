import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey: string ='d5cd246500eb4b149b447b618c47da9a'
  baseUrl: string= 'https://newsapi.org/v2';
  constructor(http: HttpClient) { }

  getSources(){
    return this.http.get(`${this.baseUrl}/sources?apiKey=${this.apiKey}`);
  }
  getArticlesBySourceId(sourceId:string){
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&aoiKey=${this.apiKey}`);
  }
  initArticles(){
    return this.getArticlesBySourceId('bbc-news');
  }
}
