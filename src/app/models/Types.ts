import { Calculation } from "./Calculation";
import { RSixCold } from "./types/RSixCold";

export class Types {
    public flowingTypes: Calculation[] = [];
    public stagnantTypes: Calculation[] = [];
    public url: string;

    constructor() {
        this.flowingTypes = [
            new RSixCold
        ];
        this.stagnantTypes = [];
        this.url = "https://maken.wikiwijs.nl/bestanden/808818/KRW-watertypen.pdf";
    }
}