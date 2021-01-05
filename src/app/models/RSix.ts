import { Calculation } from '../models/Calculation';
import { Formula } from './Formula';
import { Reference } from './Reference';
import { Input } from './Input';

export class RSix implements Calculation {
    name: string;
    formulas: Formula[];
    references: Reference[];
    inputs: Input[];
    deltaT: number; // temperatuurverschil hele rivier
    MinimalV: number; // minimal debiet nodig om energie eruit te halen
    heatCloudSeconds: number; // Hoe lang het duurt voordat de temperatuurverschil gemengd is met de rivier
    heatCloudLenght: number; // Hoe lang de warmtewolk is

    constructor() {
        this.name = "R-6";
        this.formulas = [
            new Formula("Formula 1", "A + B = C"),
            new Formula("Formula 2", "A + B + C = D")
        ];
        this.references = [
            new Reference("Click me", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        ];
        this.inputs = [
            new Input("Jaarlijkse energiebehoefte", "MWh", 2610, "number"),
            new Input("Debiet", "m3/s", 4, "number"),
            new Input("Aantal dagen per jaar", "", 186, "number"),
            new Input("Aantal uren per dag", "", 8, "number")
        ];
        this.deltaT = 0;
        this.MinimalV = 0;
        this.heatCloudSeconds = 0;
        this.heatCloudLenght = 0;
    }

    public calculate() : void {
        let results: number[] = [];

        Object.keys(this.inputs).forEach((value: string, index: number, array: string[]) => {
            results.push(this.inputs[index].input);
        });

        this.deltaT = ((+results[0]) * 3600000000) / (4186 * (997 * (+results[1]) * (31556926 * ((+results[2]) / 365) * ((+results[3]) / 24))));
    }
}
