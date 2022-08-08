import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.modules';
import { FeaturesModulesComponent } from './features-modules.component';


@NgModule({
    declarations: [FeaturesModulesComponent],
    imports: [
        CommonModule,
        FeaturesRoutingModule
    ],
    exports: [FeaturesModulesComponent]
})
export class FeaturesModulesModule { }