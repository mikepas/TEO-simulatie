import { Formula } from "./Formula";
import { Input } from "./Input";
import { MixingZoneResult } from "./mixingZoneResults";
import { Result } from "./Result";

export interface Calculation {
    name: string;
    formulas: Formula[];
    references: string[];
    inputs: Input[];
    results: Result[];
    mixingZoneResult: MixingZoneResult;
    errors: string[];
    calculate: () => void;
    validate: (results: number[]) => void;
}