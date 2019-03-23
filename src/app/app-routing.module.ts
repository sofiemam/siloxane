import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import {MilieuComponent} from './milieu/milieu.component';
import { SaisieIndividuComponent } from './saisie-individu/saisie-individu.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
 { path: 'milieu', component: MilieuComponent },
  { path: 'saisie-individu', component: SaisieIndividuComponent},
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}