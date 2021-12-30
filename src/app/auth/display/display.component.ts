import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  items:Array<any>;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata()
  {
    this.authservice.getUsers()
      .subscribe(result=>{
        this.items=result;
      })

  }

  shareto(use){
    window.alert("shared to"+use);
  }
}
