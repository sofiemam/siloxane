// import { Component, OnInit } from '@angular/core';

import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatTableDataSource, MatSort } from '@angular/material';
// import { DataSource } from '@angular/cdk/table';
// import { MatTableModule } from '@angular/material';

export interface PeriodicElement {
  Nom: string;
  Prenom: string;
  DateNaiss: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {Nom: 'MAMOUN', Prenom: 'Safia', DateNaiss: '10/11/1993'},
  {Nom: 'DUPON', Prenom: 'Jhon', DateNaiss: '10/11/1993'},
  {Nom: 'MANGA', Prenom: 'Alex', DateNaiss: '10/11/1993'},

 
  
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  admin ={ type :"Administrateur, "};
  displayedColumns: string[] = ['Nom', 'Prenom', 'DateNaiss'];
  dataSource = ELEMENT_DATA;


  constructor() { 
    
  }

  ngOnInit() {
  }


}
