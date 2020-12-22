import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowingWaterSimulationComponent } from './flowing-water-simulation/flowing-water-simulation.component';
import { FlowingWaterWikiComponent } from './flowing-water-wiki/flowing-water-wiki.component';
import { FlowingWaterComponent } from './flowing-water.component';

const routes: Routes = [
  { 
    path: '', 
    component: FlowingWaterComponent,
    children: [
      { path: '', component: FlowingWaterSimulationComponent },
      { path: 'stromend-water-simulatie', component: FlowingWaterSimulationComponent },
      { path: 'stromend-water-wiki', component: FlowingWaterWikiComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowingWaterRoutingModule { }
