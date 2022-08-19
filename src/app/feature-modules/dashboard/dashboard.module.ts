import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import {LayoutComponent} from "./layout/layout.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideosGalleryComponent } from './videos-gallery/videos-gallery.component';
import { WatchVideoComponent } from './watch-video/watch-video.component';
import { SafePipe } from 'src/app/shared/pipes/safe.pipe';

@NgModule({
    declarations: [LayoutComponent, VideosGalleryComponent, WatchVideoComponent, SafePipe],
    imports: [
        CommonModule,
        DashBoardRoutingModule,
        FontAwesomeModule
    ],
    exports: [LayoutComponent, DashBoardRoutingModule]
})
export class DashBoardModule { }
// export class AuthModule { }