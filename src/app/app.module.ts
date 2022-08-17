import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import the HttpClientModule from @angular/common/http,

import { HttpClientModule } from '@angular/common/http';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { DashboardComponent } from './feature-modules/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
    // FontAwesomeModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
