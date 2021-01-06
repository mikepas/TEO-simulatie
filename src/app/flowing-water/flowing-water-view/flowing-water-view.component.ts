import { JsonPipe } from '@angular/common';
import { ViewFlags } from '@angular/compiler/src/core';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Calculation } from 'src/app/models/Calculation';
import  EcologyData from './../../../assets/data/ecologyData.json';

@Component({
  selector: 'app-flowing-water-view',
  templateUrl: './flowing-water-view.component.html',
  styleUrls: ['./flowing-water-view.component.scss']
})
export class FlowingWaterViewComponent implements DoCheck {
  private jsonData = EcologyData;
  temperatureTableList = [[""]];
  flowingRateTableList = [[""]];

  @Input()calculation: Calculation | undefined;
  flowRateNumber = 0;
  tempCelsius = 0;
  constructor() { }
  ngDoCheck(): void {
    this.GenerateTemperatureTable();
    this.GeneratetubeVelocityTable();
  }

  GeneratetubeVelocityTable() {
    this.flowingRateTableList = [];
    let row = [];
    if(this.calculation != undefined){
      this.flowRateNumber = this.calculation?.tubeVelocity;

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

  GenerateTemperatureTable() {
    if(this.calculation != undefined) {
      this.tempCelsius = this.calculation?.inputs[7].input - this.calculation?.deltaT;
      this.tempCelsius.toFixed(0);

      this.temperatureTableList = [];
      let row = [];

      //Generate rows for Vissen
      for (const [key, value] of Object.entries(this.jsonData.Vissen)) {
        row.push(key);
        if(this.tempCelsius >= value.MaxTemperature || this.tempCelsius < value.MinTemperature) {
          row.push(value.MatingTemperature);
          row.push("Nee"); // toename
          row.push("Ja"); // afname
        } else if (this.tempCelsius >= value.MinTemperature && this.tempCelsius < value.MaxTemperature) {
          row.push(value.MatingTemperature);
          row.push("Nee"); //toename
          row.push("Nee"); // afname
        } else {
          row.push(value.MatingTemperature);
          row.push("Nee"); //toename
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
        row.push(value.increase[temp]);
        row.push(value.decrease[temp]);
        this.temperatureTableList.push(row);
        row = [];
      }
    }
  }
}
