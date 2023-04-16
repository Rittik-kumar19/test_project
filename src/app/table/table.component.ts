import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  schools = [
    { name: 'ABC School', students: 500 },
    { name: 'XYZ School', students: 600 },
    { name: 'PQR School', students: 700 }
  ];

  constructor() {
    // Add the parameters to the URL of the current tab
    const params = new URLSearchParams();
    params.set('students', this.getTotalStudents().toString());
    params.set('schools', this.schools.length.toString());
    const url = new URL(window.location.href);
    url.search = params.toString();
    window.history.replaceState({}, '', url.toString());
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private getTotalStudents() {
    return this.schools.reduce((total, school) => total + school.students, 0);
  }

  openStateTab() {
    // Retrieve the current URL with the parameters
    const url = new URL(window.location.href);

    // Construct the URL of the StateComponent with the parameters from the current tab
    const stateUrl = new URL('/state', window.location.origin);
    stateUrl.search = url.search;

    // Open the StateComponent in a new tab
    window.open(stateUrl.toString(), '_blank');
  }

}
