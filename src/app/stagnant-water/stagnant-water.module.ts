import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagnantWaterRoutingModule } from './stagnant-water-routing.module';
import { StagnantWaterComponent } from './stagnant-water.component';
import { SharedModule } from '../shared/shared.module';
import { StagnantWaterViewComponent } from './stagnant-water-view/stagnant-water-view.component';


@NgModule({
  declarations: [StagnantWaterComponent, StagnantWaterViewComponent],
  imports: [
    CommonModule,
    StagnantWaterRoutingModule,
    SharedModule
  ]
})
export class StagnantWaterModule { }
