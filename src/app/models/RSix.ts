import { Calculation } from '../models/Calculation';
import { Formula } from './Formula';
import { Reference } from './Reference';
import { Input } from './Input';

export class RSix implements Calculation {
    name: string;
    formulas: Formula[];
    references: Reference[];
    mixingZoneDistance: number;
    inputs: Input[];

    constructor() {
        this.name = "R-6";
        this.formulas = [
            new Formula("Formula 1", "A + B = C"),
            new Formula("Formula 2", "A + B + C = D")
        ];
        this.references = [
            new Reference("Click me", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        ];
        this.mixingZoneDistance = 0;
        this.inputs = [
            new Input("A", "number", 0, "number"),
            new Input("B", "number", 0, "number")
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