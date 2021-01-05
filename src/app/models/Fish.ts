import { Organism } from "./Organisms";

export class Fish extends Organism {
  getMinTemp(): number {
    throw new Error("Method not implemented.");
  }
  getMaxTemp(): number {
    throw new Error("Method not implemented.");
  }
  getMaxFlowResistance(): number {
    throw new Error("Method not implemented.");
  }
}
