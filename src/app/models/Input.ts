export class Input {
    name: string;
    unit: string;
    input: number;
    type: string;

    constructor(name: string, unit: string, input: number, type: string) {
        this.name = name;
        this.unit = unit;
        this.input = input;
        this.type = type;
    }
}