import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import {MilieuComponent} from './milieu/milieu.component';
import {Routes} from "@angular/router"; 
import { LoginComponent } from './login/login/login.component';
import { SaisieIndividuComponent } from './saisie-individu/saisie-individu.component';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';

 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    NotFoundComponent,
    MilieuComponent,
    SaisieIndividuComponent,
    
     
    
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    
   // RouterModule.forRoot(appRoutes),
    LoginModule,
    HeaderModule,
    SharedModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
