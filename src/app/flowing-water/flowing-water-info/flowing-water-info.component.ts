import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Calculation } from 'src/app/models/Calculation';

@Component({
  selector: 'app-flowing-water-info',
  templateUrl: './flowing-water-info.component.html',
  styleUrls: ['./flowing-water-info.component.scss']
})
export class FlowingWaterInfoComponent implements OnChanges, DoCheck {
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
