import { Formula } from "./Formula";
import { Input } from "./Input";
import { Reference } from "./Reference";

export interface Calculation {
    name: string;
    formulas: Formula[];
    references: Reference[];
    inputs: Input[];
    deltaT: number;
    MinimalV: number;
    heatCloudSeconds: number;
    heatCloudLenght: number;
    calculate: () => void;
}