import { Component, Input, OnInit } from '@angular/core';
import { ADonut } from 'src/app/models/a-donut';
import { DonutsListService } from 'src/app/services/donuts-list.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  @Input() donut:ADonut = {} as ADonut;
  constructor(private donutListService:DonutsListService) { }
  
  
  allDonuts:ADonut[] =[];
  
  
  
  ngOnInit(): void {
    this.donutListService.getAllDonuts().subscribe(
      (response:any)=>{
      console.log(response.results);
      this.allDonuts = response.results;
    },
    (err)=>{
      console.log(err);
    }
    );
  }
  

}
