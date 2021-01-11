import { Calculation } from "./Calculation";
import { RSeven } from "./RSeven";
import { RSixCold } from "./RSixCold";

export class Types {
    public flowingTypes: Calculation[] = [];
    public ftagnantTypes: Calculation[] = [];

    constructor() {
        this.flowingTypes = [
            new RSixCold,
            new RSeven
        ];
    }
}