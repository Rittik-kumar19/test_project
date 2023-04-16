import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-relogin',
  templateUrl: './relogin.component.html',
  styleUrls: ['./relogin.component.css']
})
export class ReloginComponent implements OnInit {

  tableData: any[] = [];

  constructor(private route: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   const tableDataString = params.get('tableData');
    //   if (tableDataString) {
    //     const decodedTableDataString = decodeURIComponent(tableDataString);
    //     this.tableData = JSON.parse(decodedTableDataString);
    //   }
    // });
    const tableDataString = this.cookieService.get('tableData');
    this.tableData = JSON.parse(tableDataString);
  }

  onBackToApp(): void{
    window.close();
  }

}
