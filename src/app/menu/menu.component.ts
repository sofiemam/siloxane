import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  admin ={ type :"Administrateur, ", date: new Date().toLocaleString() };
  constructor() { }

  ngOnInit() {
  }

}