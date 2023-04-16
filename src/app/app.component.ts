import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cart = []
  name = 'Rittik'
  title = 'pract_app1';
  constructor(private dservice: DataService){
    this.cart = this.dservice.cart
  }
}
