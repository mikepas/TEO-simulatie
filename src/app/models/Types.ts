import { Calculation } from "./Calculation";
import { RSeven } from "./RSeven";
import { RSix } from "./RSix";

export class Types {
    public flowingTypes: Calculation[] = [];
    public ftagnantTypes: Calculation[] = [];

    constructor() {
        this.flowingTypes = [
            new RSix,
            new RSeven
        ];
    }
}