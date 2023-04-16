import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  bntDisabled = false
  @Input() customer='john'
  @Output() cartEvent = new EventEmitter()
  firstname = "kiran"
  bg = 'grey'
  cart :any = []
  item : any = ''
  constructor(private dservice: DataService) { 
    this.cart = this.dservice.cart
    this.customer = this.dservice.name
  }
  
  ngOnInit(): void {
  }

  getItem(e:any):any{
    this.item = e.target.value
    // console.log(e.target.value)
  }

  addToCart(){
    this.cart.push({name:this.item, time:new Date()})
    this.item = ''
    this.cartEvent.emit(this.cart)
  }

}
