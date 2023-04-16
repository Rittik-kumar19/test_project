import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  private tableData = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 30, gender: 'Female' },
    { name: 'Bob', age: 40, gender: 'Male' }
  ];

  getTableData() {
    return this.tableData;
  }

  getTableDataAsString() {
    return JSON.stringify(this.tableData);
  }

  cart = []
  name = "Rittik"

  constructor() { }
}
