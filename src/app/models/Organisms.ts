export abstract class Organism {
  name: string;
  tolerableMaxTemperature: number;
  tolerableMinTemperature: number;
  tolerableFlowResistance: number;


  constructor(name:string, tolerableMaxTemperature:number, tolerableMinTemperature: number, tolerableFlowResistance:number) {
    this.name = name;
    this.tolerableMaxTemperature = tolerableMaxTemperature;
    this.tolerableMinTemperature = tolerableMinTemperature;
    this.tolerableFlowResistance = tolerableFlowResistance;
  }

  abstract getMaxTemp(): number;
  abstract getMinTemp(): number;
  abstract getMaxFlowResistance(): number
}
