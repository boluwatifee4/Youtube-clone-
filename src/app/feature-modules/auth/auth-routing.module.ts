import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LayoutComponent } from './layout/layout.component';
// import { AuthGuard } from './auth.guard';


const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'sign-up', component: SignUpComponent }
    ]}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
// export class AuthRoutingModule { }
