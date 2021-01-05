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
  flowRateNumber = 1.25;


  @Input()calculation: Calculation | undefined;

  constructor() { }
  ngDoCheck(): void {
    this.GenerateTemperatureTable(this.flowRateNumber, this.calculation?.deltaT);
  }

  GenerateTemperatureTable(flowRate:Number, temperature?: number) {
    if(temperature != undefined) {
      this.temperatureTableList = [];
      let row = [];

      //Generate rows for fishes
      for (const [key, value] of Object.entries(this.jsonData.Fishes)) {
        row.push(key);
        if(temperature >= value.MaxTemperature || temperature < value.MinTemperature) {
          row.push("Nee"); // toename
          row.push("Ja"); // afname
        } else if (temperature >= value.MinTemperature && temperature < value.MaxTemperature) {
          row.push("Nee"); //toename
          row.push("Nee"); // afname
        } else {
          row.push("Nee"); //toename
          row.push("ja"); // afname
        }
        this.temperatureTableList.push(row);
        row = [];
        row.push(key);
        if((value.flowRateTolerance < flowRate)) {
          row.push("-"); // toename
          row.push("Ja"); // afname
        } else {
          row.push("-"); // toename
          row.push("Nee"); // afname
        }
        this.flowingRateTableList.push(row);
        row = [];
      }

      // Generate rows for Planktons
      for (const [key, value] of Object.entries(this.jsonData.Planktons)) {
        row.push(key);
        let temp = 0;
        for (let i = 0; i < value.stressTemperatures.length; i++) {
          if(temperature >= value.stressTemperatures[i]) {
            temp = i;
          }
        }
        row.push(value.increase[temp]);
        row.push(value.decrease[temp]);
        this.temperatureTableList.push(row);
        row = [];
      }
    }
  }
}
