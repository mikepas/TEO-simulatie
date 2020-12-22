import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() type: String | undefined;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  toSimulation() {
    this.router.navigate([this.type + '-water-simulatie']);
  }

  toFormula() {
    this.router.navigate([this.type + '-water-wiki']);
  }
}
