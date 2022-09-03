import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import {LayoutComponent} from "./layout/layout.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideosGalleryComponent } from './videos-gallery/videos-gallery.component';
import { WatchVideoComponent } from './watch-video/watch-video.component';
import { SafePipe } from 'src/app/shared/pipes/safe.pipe';
import { VideosLibraryComponent } from './videos-library/videos-library.component';
import { ShortsComponent } from './shorts/shorts.component';
import { VideosDisplayerComponent } from 'src/app/shared/videos-displayer/videos-displayer.component';
import { SidebarComponent } from 'src/app/core/coreUtils/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/core/coreUtils/header/header.component';
import { MobileNavbarComponent } from 'src/app/core/coreUtils/mobile-navbar/mobile-navbar.component';
@NgModule({
    declarations: [
        LayoutComponent, 
        VideosGalleryComponent, 
        WatchVideoComponent, 
        SafePipe, 
        VideosLibraryComponent, 
        ShortsComponent, 
        VideosDisplayerComponent,
        SidebarComponent,
        HeaderComponent,
        MobileNavbarComponent
    ],
    imports: [
        CommonModule,
        DashBoardRoutingModule,
        FontAwesomeModule
    ],
    exports: [LayoutComponent, DashBoardRoutingModule]
})
export class DashBoardModule { }
// export class AuthModule { }