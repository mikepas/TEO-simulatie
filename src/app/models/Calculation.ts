import { Formula } from "./Formula";
import { Input } from "./Input";
import { Reference } from "./Reference";

export interface Calculation {
    name: string;
    formulas: Formula[];
    references: Reference[];
    inputs: Input[];
    deltaT: number;
    minimalV: number;
    heatCloudSeconds: number;
    heatCloudLenght: number;
    tubeVelocity: number;
    calculate: () => void;
}