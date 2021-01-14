import { Component, Input,  DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Calculation } from 'src/app/models/Calculation';
import  EcologyData from 'src/assets/data/ecologyData.json';

@Component({
  selector: 'app-flowing-water-table',
  templateUrl: './flowing-water-table.component.html',
  styleUrls: ['./flowing-water-table.component.scss']
})
export class FlowingWaterTableComponent implements DoCheck, OnChanges {
  private jsonData = EcologyData;
  temperatureTableList = [[""]];
  dischargePointTableList = [[""]];
  flowingRateTableList = [[""]];

  @Input() calculation!: Calculation;
  flowRateNumber:number = 0;
  tempCelsius:number = 0;
  dischargePoint:number = 0;
  option:string = "";

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // when switching to another type, execute clear.
    this.Clear();
  }

  ngDoCheck(): void {
    this.option = this.calculation.name;

    if(this.calculation.deltaT !== 0) {
      if(this.option === "R-6 koudelozing") {
        //generate cold water data
        this.GenerateTemperatureTable();
        this.GenerateDischargePointTable();
        this.GeneratetubeVelocityTable();
      }
    }
  }

  Clear() {
    this.flowingRateTableList = [];
    this.temperatureTableList = [];
    this.dischargePointTableList = [];
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

  GenerateTemperatureTable() {
    this.tempCelsius = this.calculation?.inputs[7].input - this.calculation?.deltaT; // temperature - temperatureverschil
    this.tempCelsius;
    this.temperatureTableList = [];
    let row = [];

    //Generate rows for Vissen
    for (const [key, value] of Object.entries(this.jsonData.Vissen)) {
      row.push(key);
      if(this.tempCelsius >= value.MaxTemperature || this.tempCelsius < value.MinTemperature) {
        row.push(value.MatingTemperature);
        row.push("Ja"); // afname
      } else if (this.tempCelsius >= value.MinTemperature && this.tempCelsius < value.MaxTemperature) {
        row.push(value.MatingTemperature);
        row.push("Nee"); // afname
      } else {
        row.push(value.MatingTemperature);
        row.push("ja"); // afname
      }
      this.temperatureTableList.push(row);

      row = [];
    }

    // Generate rows for Planktons
    for (const [key, value] of Object.entries(this.jsonData.Planktons)) {
      row.push(key);
      let temp = 0;
      for (let i = 0; i < value.stressTemperatures.length; i++) {
        if(this.tempCelsius >= value.stressTemperatures[i]) {
          temp = i;
        }
      }
      row.push("-");
      row.push(value.decrease[temp]);
      this.temperatureTableList.push(row);
      row = [];
    }
  }

  GenerateDischargePointTable() {
    this.dischargePoint = this.tempCelsius - this.calculation?.inputs[4].input;
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