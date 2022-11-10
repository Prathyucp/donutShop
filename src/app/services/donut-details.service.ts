import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';
import { ADonut } from '../models/a-donut';

@Injectable({
  providedIn: 'root'
})
export class DonutDetailsService {

  constructor(private http:HttpClient) { }
  url:string = "https://grandcircusco.github.io/demo-apis/donuts/0.json";
  

  getById(id:number):Observable<any>{
    this.url = this.prepareURL(id);
    console.log(this.url);
    return this.http.get<any>(this.url);
  }
  prepareURL(id:number):string{

    return "https://grandcircusco.github.io/demo-apis/donuts/"+id+".json";
  }
}
