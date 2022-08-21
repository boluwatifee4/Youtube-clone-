import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { VideosGalleryComponent } from './videos-gallery/videos-gallery.component';
import { WatchVideoComponent } from './watch-video/watch-video.component';
import { VideosLibraryComponent } from './videos-library/videos-library.component';
const routes: Routes = [
    { path: '', component: LayoutComponent ,   children: [
        { path: 'gallery', component: VideosGalleryComponent },
        { path: 'gallery/:id', component: WatchVideoComponent },
        { path: 'library', component: VideosLibraryComponent },
    ]},
    
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashBoardRoutingModule { }
// export class AuthRoutingModule { }