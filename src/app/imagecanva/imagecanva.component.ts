import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagecanva',
  templateUrl: './imagecanva.component.html',
  styleUrls: ['./imagecanva.component.css']
})
export class ImagecanvaComponent implements OnInit {

  districts = [
    { name: 'District 1', population: 10000 },
    { name: 'District 2', population: 20000 },
    { name: 'District 3', population: 30000 }
  ];
  totalPopulation: number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve the parameters from the URL of the previous tab
    const params = new URLSearchParams(window.location.search);
    const students = params.get('students') ? parseInt(params.get('students')!, 10) : 0;
    const schools = params.get('schools') ? parseInt(params.get('schools')!, 10) : 0;

    // Calculate the total population of the state using the number of students and schools from the previous tab
    this.totalPopulation = this.districts.reduce((total, district) => total + district.population, 0) * students / schools;
  }

}
