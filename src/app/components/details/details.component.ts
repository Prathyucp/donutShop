import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ADonut } from 'src/app/models/a-donut';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { DonutDetailsService } from 'src/app/services/donut-details.service';
import { DonutsListService } from 'src/app/services/donuts-list.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private donutDetailServ:DonutDetailsService, private route:ActivatedRoute,private cartServ:CartServiceService) { 
    console.log("here1");
  }
  donutDetails:ADonut = {} as ADonut;
  ngOnInit(): void {
    console.log("here2");
    const routeParam = this.route.snapshot.paramMap;
    let id:number = Number(routeParam.get("id"));
    this.donutDetailServ.getById(id).subscribe((response:any)=>{
      console.log(response);
      this.donutDetails = response;
    },
    (err)=>{
      console.log(err);
    }
    );
  }
  addItemToCart(){
    this.cartServ.addItemToCart(this.donutDetails);
  }
}
