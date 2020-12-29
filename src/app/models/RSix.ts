import { Calculation } from '../models/Calculation';

export class RSix implements Calculation {
    name: string;
    mixingZoneDistance: number;
    inputs: { name: string, unit: string, input: number, type: string}[];

    constructor() {
        this.name = "R-6";
        this.mixingZoneDistance = 0;
        this.inputs = [
            { name: "A", unit: "number", input: 0, type: "number" },
            { name: "B", unit: "number", input: 0, type: "number" }
        ];
    }

    public calculate() : void {      
        let results: number[] = [];
    
        Object.keys(this.inputs).forEach((value: string, index: number, array: string[]) => {
            results.push(this.inputs[index].input);
        });
    
        this.mixingZoneDistance = (+results[0]) + (+results[1]);
    }
}