import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: "dashboard",
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashBoardModule),
        // canActivate: [AuthGuard]
    },
    {
        path: "**",
        redirectTo: 'auth'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes), AuthModule],
    exports: [RouterModule]
})
export class FeaturesRoutingModule { }
// export class AppRoutingModule { }