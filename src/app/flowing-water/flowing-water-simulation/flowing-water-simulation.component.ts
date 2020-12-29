import { Component, OnInit } from '@angular/core';
import { RSix } from '../../models/RSix';
import { Calculation } from '../../models/Calculation';

@Component({
  selector: 'app-flowing-water-simulation',
  templateUrl: './flowing-water-simulation.component.html',
  styleUrls: ['./flowing-water-simulation.component.scss']
})
export class FlowingWaterSimulationComponent implements OnInit {
  types: string[] = ["R-6"];
  selectedType: string = "R-6";
  selectedCalculation: Calculation = new RSix;

  constructor() { }

  ngOnInit(): void {
  }

  changeType(e: any) {
    switch (e.target.value) {
      case "R-6":
        this.selectedCalculation = new RSix;
        break;
      default:
        break;
    }
  }

  calculate() {
    this.selectedCalculation.calculate();
    console.log(this.selectedCalculation.mixingZoneDistance);
  }
}
