import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowingWaterWikiComponent } from './flowing-water-wiki/flowing-water-wiki.component';
import { StagnantWaterWikiComponent } from './stagnant-water-wiki/stagnant-water-wiki.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowingWaterWikiComponent,
    StagnantWaterWikiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
