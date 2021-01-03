import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlowingWaterRoutingModule } from './flowing-water-routing.module';
import { FlowingWaterComponent } from './flowing-water.component';
import { SharedModule } from '../shared/shared.module';
import { FlowingWaterSimulationComponent } from './flowing-water-simulation/flowing-water-simulation.component';
import { FlowingWaterWikiComponent } from './flowing-water-wiki/flowing-water-wiki.component';
import { FlowingWaterViewComponent } from './flowing-water-view/flowing-water-view.component';

@NgModule({
  declarations: [FlowingWaterComponent, FlowingWaterSimulationComponent, FlowingWaterWikiComponent, FlowingWaterViewComponent],
  imports: [
    CommonModule,
    FlowingWaterRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlowingWaterModule { }
