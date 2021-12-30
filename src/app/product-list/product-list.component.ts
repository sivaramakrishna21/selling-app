import { Component, OnInit } from '@angular/core';
import {products} from '../products';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products=products

  share(){
    this.router.navigate(['/display']);


  }
  onNotify(){
    window.alert("notified");
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
