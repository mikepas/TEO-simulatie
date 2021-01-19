import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Calculation } from 'src/app/models/Calculation';
import  EcologyData from 'src/assets/data/ecologyData.json';

@Component({
  selector: 'app-discharge-temperature-effect-table',
  templateUrl: './discharge-temperature-effect-table.component.html',
  styleUrls: ['./discharge-temperature-effect-table.component.scss']
})
export class DischargeTemperatureEffectTableComponent implements DoCheck, OnChanges {
  private jsonData = EcologyData;
  dischargePointTableList = [[""]];
  @Input() calculation!: Calculation;
  dischargePoint:number = 0;

  constructor() { }

  ngOnChanges() {
    this.Clear();
  }

  ngDoCheck(): void {
    if(this.calculation.results[0].value !== 0) {
      this.GenerateDischargePointTable();
    }
  }

  Clear() {
    this.dischargePointTableList = [];
  }

  GenerateDischargePointTable() {
    this.dischargePoint = this.calculation.inputs[7].input - this.calculation.inputs[4].input;
    this.dischargePointTableList = [];
    let row = [];

    //Generate rows for Vissen
    for (const [key, value] of Object.entries(this.jsonData.Vissen)) {
      row.push(key);
      if(this.dischargePoint >= value.MaxTemperature || this.dischargePoint < value.MinTemperature) {
        row.push(value.MatingTemperature);
        row.push("Ja"); // afname
      } else if (this.dischargePoint >= value.MinTemperature && this.dischargePoint < value.MaxTemperature) {
        row.push(value.MatingTemperature);
        row.push("Nee"); // afname
      } else {
        row.push(value.MatingTemperature);
        row.push("ja"); // afname
      }
      this.dischargePointTableList.push(row);

      row = [];
    }

    // Generate rows for Planktons
    for (const [key, value] of Object.entries(this.jsonData.Planktons)) {
      row.push(key);
      let temp = 0;
      for (let i = 0; i < value.stressTemperatures.length; i++) {
        if(this.dischargePoint >= value.stressTemperatures[i]) {
          temp = i;
        }
      }
      row.push("-");
      row.push(value.decrease[temp]);
      this.dischargePointTableList.push(row);
      row = [];
    }
  }

}
