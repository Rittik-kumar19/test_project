import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relogin',
  templateUrl: './relogin.component.html',
  styleUrls: ['./relogin.component.css']
})
export class ReloginComponent implements OnInit {

  tableData: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tableDataString = params.get('tableData');
      if (tableDataString) {
        const decodedTableDataString = decodeURIComponent(tableDataString);
        this.tableData = JSON.parse(decodedTableDataString);
      }
    });
  }

  onBackToApp(): void{
    window.close();
  }

}
