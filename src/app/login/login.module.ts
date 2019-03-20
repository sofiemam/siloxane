import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule} from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,  ReactiveFormsModule,SharedModule
  ],
  exports :[LoginComponent],
  declarations: [LoginComponent]
})
export class LoginModule { }
