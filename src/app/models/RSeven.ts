import { Calculation } from '../models/Calculation';
import { Formula } from './Formula';
import { Input } from './Input';

export class RSeven implements Calculation {
    name: string;
    formulas: Formula[];
    references: string[];
    deltaT: number;
    inputs: Input[];
    minimalV: number;
    heatCloudSeconds: number;
    heatCloudLenght: number;
    heatCloud: number[];
    tubeVelocity: number;
    errors: string[];

    constructor() {
        this.name = "R-7";
        this.formulas = [
            new Formula("Formula 1", "Uitleg 1", "X + Y = Z"),
            new Formula("Formula 2", "Uitleg 2", "X + Y + Z = Q")
        ];
        this.references = [
            "Referentie 1"
        ];
        this.inputs = [
            new Input("X", "", "", 0, "number"),
            new Input("Y", "", "", 0, "number"),
            new Input("Z", "", "", 0, "number")
        ];
        this.deltaT = 0;
        this.minimalV = 0;
        this.heatCloudSeconds = 0;
        this.heatCloudLenght = 0;
        this.heatCloud = [];
        this.tubeVelocity = 0;
        this.errors = [];
    }

    public calculate() : void {      
        let results: number[] = [];
    
        Object.keys(this.inputs).forEach((value: string, index: number, array: string[]) => {
            results.push(this.inputs[index].input);
        });
    
        this.deltaT = (+results[0]) + (+results[1]) + (+results[2]);
    }

    validate(results: number[]) {
        
    }
}