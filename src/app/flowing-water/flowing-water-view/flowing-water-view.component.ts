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
export class FlowingWaterViewComponent implements DoCheck, OnChanges {
  option:string = "";
  @Input() calculation!: Calculation;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.option = "";
  }

  ngDoCheck(): void {
    if(this.calculation.results[0].value !== 0) {
      this.option = this.calculation.name;
    }
  }
}
