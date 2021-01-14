import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Calculation } from 'src/app/models/Calculation';
import  EcologyData from 'src/assets/data/ecologyData.json';

@Component({
  selector: 'app-temperature-effect-table',
  templateUrl: './temperature-effect-table.component.html',
  styleUrls: ['./temperature-effect-table.component.scss']
})
export class TemperatureEffectTableComponent implements DoCheck, OnChanges {
  private jsonData = EcologyData;
  temperatureTableList = [[""]];
  @Input() calculation!: Calculation;
  tempCelsius:number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // when switching to another type, execute clear.
    this.Clear();
  }

  ngDoCheck(): void {

    if(this.calculation.deltaT !== 0) {
      console.log("yooo");
      //generate cold water data
      this.GenerateTemperatureTable();
    }

  }

  Clear() {
    this.temperatureTableList = [];
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

}
