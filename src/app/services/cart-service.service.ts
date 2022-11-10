import { Injectable } from '@angular/core';
import { ADonut } from '../models/a-donut';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }
  cartItems:ADonut[] = [];

  addItemToCart(item:ADonut){
    let index = this.findIndex(item);
    if(index>=0){
      this.cartItems[index].quantity++;
      this.cartItems[index].price++;
    }else{
      item.price=1;
      item.quantity = 1;
      this.cartItems.push(item);
    }
    
  }
  removeFromCart(item:ADonut){
    let index = this.findIndex(item);
    if(index>=0){
      if(this.cartItems[index].quantity>1){
        this.cartItems[index].quantity--;
        this.cartItems[index].price--;
      }else{
        this.cartItems.splice(index,1);
      }
    }
  }
  findIndex(item:ADonut){
    return this.cartItems.findIndex(i=>i.id == item.id);
  }

}
