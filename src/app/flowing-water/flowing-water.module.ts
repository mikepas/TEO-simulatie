import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlowingWaterRoutingModule } from './flowing-water-routing.module';
import { FlowingWaterComponent } from './flowing-water.component';
import { SharedModule } from '../shared/shared.module';
import { FlowingWaterSimulationComponent } from './flowing-water-simulation/flowing-water-simulation.component';
import { FlowingWaterWikiComponent } from './flowing-water-wiki/flowing-water-wiki.component';
import { FlowingWaterInfoComponent } from './flowing-water-info/flowing-water-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemperatureEffectTableComponent } from 'src/app/effectenComponents//temperature-effect-table/temperature-effect-table.component';
import { FlowEffectTableComponent } from 'src/app/effectenComponents/flow-effect-table/flow-effect-table.component';
import { DischargeTemperatureEffectTableComponent } from 'src/app/effectenComponents/discharge-temperature-effect-table/discharge-temperature-effect-table.component';
import { ColdWaterEffectInfoComponent } from 'src/app/effectenComponents/cold-water-effect-info/cold-water-effect-info.component';
import { WarmWaterEffectInfoComponent } from 'src/app/effectenComponents/warm-water-effect-info/warm-water-effect-info.component';

@NgModule({
  declarations: [FlowingWaterComponent, FlowingWaterSimulationComponent, FlowingWaterWikiComponent, FlowingWaterInfoComponent,TemperatureEffectTableComponent,
    FlowEffectTableComponent,
    DischargeTemperatureEffectTableComponent,
    ColdWaterEffectInfoComponent,
    WarmWaterEffectInfoComponent],
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
