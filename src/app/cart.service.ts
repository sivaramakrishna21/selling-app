import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items=[];
  get_items()
  {
    return this.items;
  }

  add_items(product)
  {
    this.items.push(product);
  }

  clear_cart()
  {
    this.items=[];
    return this.items;
  }

  constructor() { }
}
