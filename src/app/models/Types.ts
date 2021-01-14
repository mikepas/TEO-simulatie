import { Calculation } from "./Calculation";
import { RSeven } from "./types/RSeven";
import { RSixCold } from "./types/RSixCold";

export class Types {
    public flowingTypes: Calculation[] = [];
    public stagnantTypes: Calculation[] = [];

    constructor() {
        this.flowingTypes = [
            new RSixCold,
            new RSeven
        ];
        this.stagnantTypes = [];
    }
}