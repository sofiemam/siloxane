import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { LogoComponent } from './logo/logo.component';
 
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports :[
    HeaderComponent
  ],
  declarations: [DeconnexionComponent, LogoComponent, HeaderComponent]
})
export class HeaderModule { }
