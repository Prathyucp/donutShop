import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ADonut } from 'src/app/models/a-donut';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private route:ActivatedRoute,private cartServ:CartServiceService) { 
    console.log("inside cart");
  }
  
  cartItems:ADonut[] = [];
  totalCal:number = 0;
  totalPrice:number = 0;
  totalQuantity:number = 0;
  ngOnInit(): void {
    this.evaluate();
  }
  removeItem(cartItem:ADonut){
    console.log(cartItem.id+cartItem.name);
    this.cartServ.removeFromCart(cartItem);
    this.evaluate();
  }
  evaluate(){
    this.totalCal = 0;
    this.totalPrice = 0;
    this.totalQuantity = 0;
    this.cartItems = this.cartServ.cartItems;
    this.cartItems.forEach( c=> this.totalCal+=(c.calories*c.quantity));
    this.cartItems.forEach( c=> this.totalPrice+=c.price);
    this.cartItems.forEach( c=> this.totalQuantity+=c.quantity);
  }
}
