import { Calculation } from '../models/Calculation';
import { Formula } from './Formula';
import { Reference } from './Reference';
import { Input } from './Input';

export class RSix implements Calculation {
    name: string;
    formulas: Formula[];
    references: Reference[];
    inputs: Input[];
    deltaT: number;
    minimalV: number;
    heatCloudSeconds: number;
    heatCloudLenght: number;
    tubeVelocity: number;

    constructor() {
        this.name = "R-6";
        this.formulas = [
            new Formula("Formula 1", "Uitleg 1", "A + B = C"),
            new Formula("Formula 2", "Uitleg 2", "A + B + C = D")
        ];
        this.references = [
            new Reference("Click me", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        ];
        this.inputs = [
            new Input("Jaarlijkse energiebehoefte", "MWh", 2610, "number"),
            new Input("Debiet", "m3/s", 4, "number"),
            new Input("Aantal dagen per jaar", "", 186, "number"),
            new Input("Aantal uren per dag", "", 8, "number"),
            new Input("Temperatuursverandering opgenomen water", "°C", 4, "number"),
            new Input("Breedte rivier", "m", 20, "number"),
            new Input("Diepte rivier", "m", 2.5, "number"),
            new Input("Watertemperatuur", "°C", 15, "number"),
            new Input("Windsnelheid", "m/s", 5, "number"),
            new Input("Inlaat buisdiameter", "mm", 200, "number")
        ];
        this.deltaT = 0;
        this.minimalV = 0;
        this.heatCloudSeconds = 0;
        this.heatCloudLenght = 0;
        this.tubeVelocity = 0;
    }

    public calculate() : void {
        let results: number[] = [];

        Object.keys(this.inputs).forEach((value: string, index: number, array: string[]) => {
            results.push(this.inputs[index].input);
        });

        let J = (+results[0]) * 3600000000;
        let s = (31556926 * ((+results[2]) / 365) * ((+results[3]) / 24));
<<<<<<< HEAD

=======
        let v = ((+results[1]) / ((+results[5]) * (+results[6]) * 0.9));

>>>>>>> a5c8ea3d60505065213092c56dce52d78068e63e
        this.deltaT = (J) / (4186 * (997 * (+results[1]) * s));
        this.minimalV = (((J) / s) / (4186 * (+results[4]))) / 997 * 1000;

        let heatCloud = Math.sqrt((((J / s)) / ((+results[5]) * v * (Math.abs( -(4.48 + 0.049 * (+results[7]) + ((3.5 + 2 * (+results[8])) * Math.pow(5000000 / ((+results[5]) * (+results[6]) * 0.9), 0.05))) * (1.12 + 0.018 * (+results[7]) + 0.00158 * Math.pow((+results[7]), 2)) * (+results[4]))))));

        this.heatCloudSeconds = heatCloud;
        this.heatCloudLenght = heatCloud * v;
        this.tubeVelocity = 1.273 * (this.minimalV / 1000) / Math.pow((+results[9]) / 1000, 2);
    }
}
