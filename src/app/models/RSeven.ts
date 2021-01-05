import { Calculation } from '../models/Calculation';
import { Formula } from './Formula';
import { Reference } from './Reference';
import { Input } from './Input';

export class RSeven implements Calculation {
    name: string;
    formulas: Formula[];
    references: Reference[];
    mixingZoneDistance: number;
    inputs: Input[];

    constructor() {
        this.name = "R-7";
        this.formulas = [
            new Formula("Formula 1", "X + Y = Z"),
            new Formula("Formula 2", "X + Y + Z = Q")
        ];
        this.references = [
            new Reference("Click me", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
            new Reference("referentie 2", "https://m.youtube.com/watch?v=5aopMm7UGYA")
        ];
        this.mixingZoneDistance = 0;
        this.inputs = [
            new Input("X", "number", 0, "number"),
            new Input("Y", "number", 0, "number"),
            new Input("Z", "number", 0, "number")
        ];
    }

    public calculate() : void {      
        let results: number[] = [];
    
        Object.keys(this.inputs).forEach((value: string, index: number, array: string[]) => {
            results.push(this.inputs[index].input);
        });
    
        this.mixingZoneDistance = (+results[0]) + (+results[1]) + (+results[2]);
    }
}