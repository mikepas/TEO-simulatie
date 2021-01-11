import { Formula } from "./Formula";
import { Input } from "./Input";

export interface Calculation {
    name: string;
    formulas: Formula[];
    references: string[];
    inputs: Input[];
    deltaT: number;
    minimalV: number;
    heatCloudSeconds: number;
    heatCloudLenght: number;
    heatCloud: number[];
    tubeVelocity: number;
    errors: string[];
    calculate: () => void;
    validate: (results: number[]) => void;
}