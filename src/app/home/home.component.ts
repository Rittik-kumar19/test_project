import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name =''
  cart = []

  items=[]
  constructor(private dservice: DataService) { 
    this.cart = this.dservice.cart
  }

  ngOnInit(): void {
  }

  updateCart(e:any){
    // alert(JSON.stringify(e))
    this.items = e
  }

  entername(n:any){
    // this.name = n.value
    // n.value = ''
    this.dservice.name = n.value
    n.value =  ''
  }

}
