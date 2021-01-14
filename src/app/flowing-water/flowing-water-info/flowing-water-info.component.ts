import { Component, Input, OnInit } from '@angular/core';
import { Calculation } from 'src/app/models/Calculation';

@Component({
  selector: 'app-flowing-water-info',
  templateUrl: './flowing-water-info.component.html',
  styleUrls: ['./flowing-water-info.component.scss']
})
export class FlowingWaterInfoComponent implements OnInit {
  @Input() display! :Boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
