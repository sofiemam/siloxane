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
import { MenuComponent } from './home/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import {MilieuComponent} from './milieu/milieu.component';
import {Routes} from "@angular/router"; 
import { LoginComponent } from './login/login/login.component';
import { SaisieIndividuComponent } from './saisie-individu/saisie-individu.component';
//const appRoutes: Routes = [
 //{ path: 'dashboard', component: DashboardComponent },
 //{ path: 'milieu', component: MilieuComponent },

  //{ path: 'login', component : LoginComponent},
  // { path: '**', redirectTo: '/404', pathMatch: 'full'}

 //]
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
