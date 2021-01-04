import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { WikiItemComponent } from './wiki-item/wiki-item.component';

@NgModule({
  declarations: [MenuComponent, WikiItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    WikiItemComponent
  ]
})
export class SharedModule { }
