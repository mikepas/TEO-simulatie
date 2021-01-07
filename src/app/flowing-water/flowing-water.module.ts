import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlowingWaterRoutingModule } from './flowing-water-routing.module';
import { FlowingWaterComponent } from './flowing-water.component';
import { SharedModule } from '../shared/shared.module';
import { FlowingWaterSimulationComponent } from './flowing-water-simulation/flowing-water-simulation.component';
import { FlowingWaterWikiComponent } from './flowing-water-wiki/flowing-water-wiki.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FlowingWaterComponent, FlowingWaterSimulationComponent, FlowingWaterWikiComponent],
  imports: [
    CommonModule,
    FlowingWaterRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class FlowingWaterModule { }
