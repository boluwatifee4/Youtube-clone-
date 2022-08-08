import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesModulesModule } from './feature-modules/feature-modules.modules';


const routes: Routes = [
  { path: '', redirectTo: 'feature-modules', pathMatch: 'full' },
  {
    path: "Feature-modules",
    loadChildren: () => import('./feature-modules/feature-modules.modules').then(m => m.FeaturesModulesModule),
    // canActivate: [AuthGuard]
  },
  {
    path: "**",
    redirectTo: 'feature-modules'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), FeaturesModulesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
