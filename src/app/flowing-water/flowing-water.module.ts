import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowingWaterRoutingModule } from './flowing-water-routing.module';
import { FlowingWaterComponent } from './flowing-water.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FlowingWaterComponent],
  imports: [
    CommonModule,
    FlowingWaterRoutingModule,
    SharedModule
  ]
})
export class FlowingWaterModule { }
