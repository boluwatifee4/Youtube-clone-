import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import {LayoutComponent} from "./layout/layout.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideosGalleryComponent } from './videos-gallery/videos-gallery.component';

@NgModule({
    declarations: [LayoutComponent, VideosGalleryComponent],
    imports: [
        CommonModule,
        DashBoardRoutingModule,
        FontAwesomeModule
    ],
    exports: [LayoutComponent, DashBoardRoutingModule]
})
export class DashBoardModule { }
// export class AuthModule { }