import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StagnantWaterSimulationComponent } from '../stagnant-water-simulation/stagnant-water-simulation.component';
import { StagnantWaterWikiComponent } from '../stagnant-water-wiki/stagnant-water-wiki.component';
import { StagnantWaterComponent } from './stagnant-water.component';

const routes: Routes = [
  { 
    path: '', 
    component: StagnantWaterComponent,
    children: [
      { path: '', component: StagnantWaterSimulationComponent },
      { path: 'stilstaand-water-simulatie', component: StagnantWaterSimulationComponent },
      { path: 'stilstaand-water-wiki', component: StagnantWaterWikiComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagnantWaterRoutingModule { }
