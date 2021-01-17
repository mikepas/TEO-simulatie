import { Calculation } from '../Calculation';
import { Formula } from '../Formula';
import { Input } from '../Input';
import { MixingZoneResult } from '../mixingZoneResults';
import { Result } from '../Result';

export class RSeven implements Calculation {
    name: string;
    formulas: Formula[];
    references: string[];
    inputs: Input[];
    results: Result[];
    mixingZoneResult: MixingZoneResult;
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
        this.results = [
            new Result("Uitkomst", "", 0, "")
        ];
        this.mixingZoneResult = new MixingZoneResult();
        this.errors = [];
    }

    public calculate() : void {      
        let results: number[] = [];
    
        Object.keys(this.inputs).forEach((value: string, index: number, array: string[]) => {
            results.push(this.inputs[index].input);
        });
    
        this.results[0].value = (+results[0]) + (+results[1]) + (+results[2]);

        this.validate([this.results[0].value]);
    }

    validate(results: number[]) {
        this.errors = [];

        if (results[0] == 0)
            this.errors.push("De uitkomst is 0.");
    }
}