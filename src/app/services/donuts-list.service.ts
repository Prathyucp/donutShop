import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADonut } from '../models/a-donut';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutsListService{

  constructor(private http:HttpClient) { }
  url:string = "https://grandcircusco.github.io/demo-apis/donuts.json";

  getAllDonuts():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
