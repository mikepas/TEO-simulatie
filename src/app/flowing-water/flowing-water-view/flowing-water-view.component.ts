import { JsonPipe } from '@angular/common';
import { ViewFlags } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Fish } from 'src/app/models/Fish';
import { Organism } from 'src/app/models/Organisms';
import  EcologyData from './../../../assets/data/ecologyData.json';

@Component({
  selector: 'app-flowing-water-view',
  templateUrl: './flowing-water-view.component.html',
  styleUrls: ['./flowing-water-view.component.scss']
})
export class FlowingWaterViewComponent implements OnInit {
  private jsonData = EcologyData;
  list = [
    [""]
  ];
  TempCelsius = 0;

  constructor() { }

  ngOnInit(): void {
    this.TempCelsius = 35;

  }

  AddItem() {
    this.GenerateTemperatureTable(this.TempCelsius);
  }

  GenerateTemperatureTable(temperature: number) {
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
      this.list.push(row);
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
      this.list.push(row);
      row = [];
    }
  }
}
