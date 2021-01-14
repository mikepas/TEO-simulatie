import { Component, Input, OnInit } from '@angular/core';
import { Calculation } from 'src/app/models/Calculation';
import  EcologyData from 'src/assets/data/ecologyData.json';

@Component({
  selector: 'app-flow-effect-table',
  templateUrl: './flow-effect-table.component.html',
  styleUrls: ['./flow-effect-table.component.scss']
})
export class FlowEffectTableComponent implements OnInit {
  flowingRateTableList = [[""]];
  private jsonData = EcologyData;
  flowRateNumber:number = 0;
  @Input() calculation!: Calculation;

  constructor() { }

  ngOnInit(): void {
    this.GeneratetubeVelocityTable();
  }

  GeneratetubeVelocityTable() {
    this.flowingRateTableList = [];
    let row = [];

    this.flowRateNumber = this.calculation.tubeVelocity;

    for (const [key, value] of Object.entries(this.jsonData.Vissen)) {
      row.push(key);
      row.push(value.MaxSpeed+"m/s");
      if((value.MaxSpeed < this.flowRateNumber)) {
        row.push("Ja"); // afname
      } else {
        row.push("Nee"); // afname
      }
      this.flowingRateTableList.push(row);
      row = [];
    }
  }
}
