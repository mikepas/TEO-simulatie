import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() type: String | undefined;
  simulationUrl: string = "";
  wikiUrl: string = "";

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.simulationUrl = '/' + this.type + '-water/' + this.type + '-water-simulatie';
    this.wikiUrl = '/' + this.type + '-water/' + this.type + '-water-wiki';
  }
}
