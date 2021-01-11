import { Calculation } from './Calculation';
import { Formula } from './Formula';
import { Reference } from './Reference';
import { Input } from './Input';

export class RSixCold implements Calculation {
    name: string;
    formulas: Formula[];
    references: Reference[];
    inputs: Input[];
    deltaT: number;
    minimalV: number;
    heatCloudSeconds: number;
    heatCloudLenght: number;
    heatCloud: number[];
    tubeVelocity: number;
    errors: string[];

    constructor() {
        this.name = "R-6 koudelozing";
        this.formulas = [
            new Formula("Formula 1", "Uitleg 1", "A + B = C"),
            new Formula("Formula 2", "Uitleg 2", "A + B + C = D")
        ];
        this.references = [
            new Reference("Click me", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        ];
        this.inputs = [
            new Input("Jaarlijkse energiebehoefte", "De jaarlijkse warmteenergiebehoefte die nodig is, uitgedrukt in MWh.", "MWh", 2610, "number"),
            new Input("Debiet", "Het debiet dat door het waterlichaam stroomt, uitgedrukt in m3/s.", "m3/s", 4, "number"),
            new Input("Aantal dagen per jaar", "Aantal dagen dat het systeem actief is / verwacht te zijn.", "", 186, "number"),
            new Input("Aantal uren per dag", "Aantal uren dat het systeem per dag actief is.", "", 8, "number"),
            new Input("temp. verandering door TSA", "Het temperatuurverschil dat de TSA(warmtewisselaar) veroorzaakt, uitgedrukt in °C.", "°C", 4, "number"),
            new Input("Breedte rivier", "De breedte van het het waterlichaam, uitgedrukt in meters.", "m", 20, "number"),
            new Input("Diepte rivier", "Het diepste punt van het waterlichaam, uitgedrukt in meters", "m", 2.5, "number"),
            new Input("Watertemperatuur", "De temperatuur van het waterlichaam op het punt van de inzuiging, uitgedrukt in °C.", "°C", 15, "number"),
            new Input("Windsnelheid", "De gemiddelde windsnelheid op het punt waar het water wordt ingezogen en geloosd, uitgedrukt in m/s.", "m/s", 5, "number"),
            new Input("Inlaat buisdiameter", "De diameter van de buis waar het water wordt ingezogen, uitgedrukt in millimeters.", "mm", 200, "number")
        ];
        this.deltaT = 0;
        this.minimalV = 0;
        this.heatCloudSeconds = 0;
        this.heatCloudLenght = 0;
        this.heatCloud = [];
        this.tubeVelocity = 0;
        this.errors = [];
    }

    public calculate() : void {
        let results: number[] = [];
    
        Object.keys(this.inputs).forEach((value: string, index: number, array: string[]) => {
            results.push(this.inputs[index].input);
        });
        
        this.validate(results);

        let J = (+results[0]) * 3600000000;
        let s = (31556926 * ((+results[2]) / 365) * ((+results[3]) / 24));
        let v = ((+results[1]) / ((+results[5]) * (+results[6]) * 0.9));
    
        this.deltaT = (J) / (4186 * (997 * (+results[1]) * s));
        this.minimalV = (((J) / s) / (4186 * (+results[4]))) / 997 * 1000;

        let heatCloud = Math.sqrt((((J / s)) / ((+results[5]) * v * (Math.abs( -(4.48 + 0.049 * (+results[7]) + ((3.5 + 2 * (+results[8])) * Math.pow(5000000 / ((+results[5]) * (+results[6]) * 0.9), 0.05))) * (1.12 + 0.018 * (+results[7]) + 0.00158 * Math.pow((+results[7]), 2)) * (+results[4]))))));
        
        this.heatCloudSeconds = heatCloud;
        this.heatCloudLenght = heatCloud * v;
        this.tubeVelocity = 1.273 * (this.minimalV / 1000) / Math.pow((+results[9]) / 1000, 2);

        this.heatCloud = [];
        let outgoingTemp = (+results[4]);

        for (let index = 0; index < 4; index++) {
            if (outgoingTemp == 0)
                break;

            if (index != 0) {
                this.heatCloud.push(outgoingTemp -= ((+results[4]) / 4));
            } else {
                this.heatCloud.push(outgoingTemp);
            }
        }
    }

    validate(results: number[]) {
        this.errors = [];

        if ((+results[0]) == 0 || (+results[1]) == 0 || (+results[2]) == 0 || (+results[3]) == 0) {
            this.errors.push("Niet alle invoerwaardes ingevult om het temperatuurverschil van het gehele lichaam te berekenen.");
        }

        if ((+results[0]) == 0 || (+results[2]) == 0 || (+results[3]) == 0 || (+results[4]) == 0) {
            this.errors.push("Niet alle invoerwaardes ingevult om het minimale inzuigdebiet te berekenen.");
        }

        if ((+results[0]) == 0 || (+results[1]) == 0 || (+results[2]) == 0 || (+results[3]) == 0 || (+results[4]) == 0 || (+results[5]) == 0 || (+results[6]) == 0 || (+results[7]) == 0 || (+results[8]) == 0) {
            this.errors.push("Niet alle invoerwaardes ingevult om het aantal seconden van de vermenging van de koudewolk te berekenen.");
        }

        if ((+results[0]) == 0 || (+results[1]) == 0 || (+results[2]) == 0 || (+results[3]) == 0 || (+results[4]) == 0 || (+results[5]) == 0 || (+results[6]) == 0 || (+results[7]) == 0 || (+results[8]) == 0) {
            this.errors.push("Niet alle invoerwaardes ingevult om het aantal meter van de vermenging van de koudewolk te berekenen.");
        }

        if ((+results[0]) == 0 || (+results[2]) == 0 || (+results[3]) == 0 || (+results[4]) == 0 || (+results[9]) == 0) {
            this.errors.push("Niet alle invoerwaardes ingevult om de snelheid van het water in de inzuigbuis te berekenen.");
        }

        if ((+results[4]) == 0) {
            this.errors.push("Niet alle invoerwaardes ingevult om de temperaturen in de mengzone te kunnen tonen.");
        }

        if (this.errors.length > 0) 
            return false

        return true;
    }
}