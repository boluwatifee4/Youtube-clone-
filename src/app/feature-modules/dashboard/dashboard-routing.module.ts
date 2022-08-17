import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { VideosGalleryComponent } from './videos-gallery/videos-gallery.component';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '**', component: VideosGalleryComponent },
    ]}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashBoardRoutingModule { }
// export class AuthRoutingModule { }