export class Result {
    name: string;
    description: string;
    value: number;
    unit: string;

    constructor(name: string, description: string, value: number, unit: string) {
        this.name = name;
        this.description = description;
        this.value = value;
        this.unit = unit;
    }
}