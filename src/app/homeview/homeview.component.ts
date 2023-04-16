import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {

  tableData: any[] = [];

  constructor(private tableDataService: DataService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.tableData = this.tableDataService.getTableData();
  }

  openNewTab():void{
    // window.open(url,'/login')
    // const url = 'http://localhost:4200';
    // const name = 'login';
    // const features = 'width=500,height=500';
    // window.open('/relogin');

    const tableDataString = this.tableDataService.getTableDataAsString();
    const url = '/relogin/' + encodeURIComponent(tableDataString);
    // const url = '/relogin/';

    // this.cookieService.set('tableData', tableDataString, {expires:1});
    localStorage.setItem('tableData', tableDataString);
    console.log(encodeURIComponent(tableDataString))
    window.open(url);
  }

}
