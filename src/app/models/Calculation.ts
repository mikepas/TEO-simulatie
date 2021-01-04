import { Formula } from "./Formula";
import { Input } from "./Input";
import { Reference } from "./Reference";

export interface Calculation {
    name: string;
    formulas: Formula[];
    references: Reference[];
    mixingZoneDistance: number;
    inputs: Input[];
    calculate: () => void;
}