import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        // { path: 'login', component: LoginComponent },
        // { path: 'sign-up', component: SignUpComponent }
    ]}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashBoardRoutingModule { }
// export class AuthRoutingModule { }