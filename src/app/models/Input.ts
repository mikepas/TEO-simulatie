export class Input {
    name: string;
    description: string;
    unit: string;
    input: number;
    type: string;

    constructor(name: string, description: string, unit: string, input: number, type: string) {
        this.name = name;
        this.description = description;
        this.unit = unit;
        this.input = input;
        this.type = type;
    }
}