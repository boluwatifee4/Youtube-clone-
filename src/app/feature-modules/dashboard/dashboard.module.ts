import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import {LayoutComponent} from "./layout/layout.component";

@NgModule({
    declarations: [LayoutComponent],
    imports: [
        CommonModule,
        DashBoardRoutingModule,
    ],
    exports: [LayoutComponent, DashBoardRoutingModule]
})
export class DashBoardModule { }
// export class AuthModule { }