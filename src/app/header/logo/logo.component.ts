import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  //admin ={ type :"Administrateur" };
  constructor( private router: Router) { }

  ngOnInit() {
  }

  logoClick(){
    this.router.navigateByUrl('/dashboard');
  }
}
