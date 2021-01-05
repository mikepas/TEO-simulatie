import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/stromend-water/stromend-water-simulatie', pathMatch: 'full' },
  { path: 'stromend-water', loadChildren: () => import('./flowing-water/flowing-water.module').then(m => m.FlowingWaterModule) },
  { path: 'stilstaand-water', loadChildren: () => import('./stagnant-water/stagnant-water.module').then(m => m.StagnantWaterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
