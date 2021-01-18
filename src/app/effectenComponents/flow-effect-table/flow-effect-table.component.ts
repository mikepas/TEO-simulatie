import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Calculation } from 'src/app/models/Calculation';
import  EcologyData from 'src/assets/data/ecologyData.json';

@Component({
  selector: 'app-flow-effect-table',
  templateUrl: './flow-effect-table.component.html',
  styleUrls: ['./flow-effect-table.component.scss']
})
export class FlowEffectTableComponent implements DoCheck, OnChanges {
  flowingRateTableList = [[""]];
  private jsonData = EcologyData;
  flowRateNumber:number = 0;
  @Input() calculation!: Calculation;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // when switching to another type, execute clear.
    this.Clear();
  }

  ngDoCheck(): void {
    if(this.calculation.results[2] !== undefined && this.calculation.results[2].value !== 0) {
      this.GeneratetubeVelocityTable();
    }
  }

  Clear() {
    this.flowingRateTableList = [];
  }

  GeneratetubeVelocityTable() {
    this.flowingRateTableList = [];
    let row = [];

    this.flowRateNumber = this.calculation.results[2].value;


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
