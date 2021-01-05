import { Component, OnInit } from '@angular/core';
import { Calculation } from '../../models/Calculation';
import { Types } from '../../models/Types';

@Component({
  selector: 'app-flowing-water-simulation',
  templateUrl: './flowing-water-simulation.component.html',
  styleUrls: ['./flowing-water-simulation.component.scss']
})
export class FlowingWaterSimulationComponent implements OnInit {
  types: Types;
  selectedCalculation: Calculation;

  constructor() {
    this.types = new Types();
    this.selectedCalculation = this.types.flowingTypes[0];
  }

  ngOnInit(): void {
  }

  changeType(e: any) {
    this.types.flowingTypes.forEach(element => {
      if (element.name == e.target.value) {
        this.selectedCalculation = element;
      }
    });
  }

  calculate() {
    this.selectedCalculation.calculate();
    console.log(this.selectedCalculation.mixingZoneDistance);
  }
}
