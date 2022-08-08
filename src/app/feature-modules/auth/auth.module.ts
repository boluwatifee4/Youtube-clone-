import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
    declarations: [
    LayoutComponent,
    LoginComponent,
    SignUpComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    exports: []
})
export class AuthModule { }