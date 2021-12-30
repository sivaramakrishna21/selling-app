import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import {FormBuilder,ReactiveFormsModule,FormsModule} from '@angular/forms'
import {Location} from '@angular/common';
import {Router} from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutform;
  constructor(private cartService:CartService,private formbuilder:FormBuilder,private location:Location,private router:Router) {
    this.checkoutform=this.formbuilder.group({
      name:'',
      address:''
    });
  }
  backClicked(){
    this.location.back();
  }

  cartlist()
  {
    this.router.navigate(['/products'])
  }
  ngOnInit(): void {
    console.log(this.items);
    this.items=this.cartService.get_items();
  }


  notempty()
  {

    if(this.items.length>=1)
    return true;
    return false;
  }

  onSubmit(data){
    console.log(data);
    this.items=this.cartService.clear_cart();
    this.checkoutform.reset();
    window.alert("request sumbmitted");
  }

}
