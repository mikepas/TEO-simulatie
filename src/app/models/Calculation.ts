export interface Calculation {
    name: string;
    mixingZoneDistance: number;
    inputs: { name: string, unit: string, input: number, type: string}[];
    calculate: () => void;
}