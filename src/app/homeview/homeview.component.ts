import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {

  tableData: any[] = [];

  constructor(private tableDataService: DataService) { }

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
    console.log(encodeURIComponent(tableDataString))
    window.open(url);
  }

}
