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
  dischargePointTableList = [[""]];
  flowingRateTableList = [[""]];

  @Input() calculation!: Calculation;
  flowRateNumber = 0;
  tempCelsius = 0;
  dischargePoint = 0;
  option:string = "";

  constructor() { }

  ngOnInit(): void {}

  ngDoCheck(): void {
    if(this.calculation.deltaT !== 0) {
      this.GenerateTemperatureTable();
      this.GenerateDischargePointTable();
      this.GeneratetubeVelocityTable();
    }
  }


  GeneratetubeVelocityTable() {
    this.flowingRateTableList = [];
    let row = [];
    let test = this.calculation?.tubeVelocity;
    console.log("test" + this.calculation.name);
    if(this.calculation != undefined){
      this.option = this.calculation.name;
      //console.log(this.option);


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
      this.tempCelsius = this.calculation?.inputs[7].input - this.calculation?.deltaT; // temperature - temperatureverschil
      this.tempCelsius;
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

  GenerateDischargePointTable() {
    if(this.calculation != undefined) {
      this.dischargePoint = this.tempCelsius - this.calculation?.inputs[4].input;
      this.dischargePointTableList = [];
      let row = [];

      //Generate rows for Vissen
      for (const [key, value] of Object.entries(this.jsonData.Vissen)) {
        row.push(key);
        if(this.dischargePoint >= value.MaxTemperature || this.dischargePoint < value.MinTemperature) {
          row.push(value.MatingTemperature);
          row.push("Nee"); // toename
          row.push("Ja"); // afname
        } else if (this.dischargePoint >= value.MinTemperature && this.dischargePoint < value.MaxTemperature) {
          row.push(value.MatingTemperature);
          row.push("Nee"); //toename
          row.push("Nee"); // afname
        } else {
          row.push(value.MatingTemperature);
          row.push("Nee"); //toename
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
        row.push(value.increase[temp]);
        row.push(value.decrease[temp]);
        this.dischargePointTableList.push(row);
        row = [];
      }
    }
  }


}
