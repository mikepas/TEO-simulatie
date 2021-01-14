import { Calculation } from '../Calculation';
import { Formula } from '../Formula';
import { Input } from '../Input';
import { MixingZoneResult } from '../mixingZoneResults';
import { Result } from '../Result';

export class RSixCold implements Calculation {
    name: string;
    formulas: Formula[];
    references: string[];
    inputs: Input[];
    results: Result[];
    mixingZoneResult: MixingZoneResult;
    errors: string[];

    constructor() {
        this.name = "R-6 koudelozing";
        this.formulas = [
            new Formula("Berekeningen R-6 koudelozing", "De berekening die voor het type R-6 koudelozing zijn gebruikt staan in het onderstaande document 'The effect on thermal energy recovery on the ecology of a small, slow flowing freshwater ecosystem'. De berekeningen staan op pagina 15 t/m 18.", ""),
        ];
        this.references = [
            "M. Ramakers. (2020). The effect on thermal energy recovery on the ecology of a small, slow flowing freshwater ecosystem. 's Hertogenbosch. Opgehaald van <a href='https://www.ou.nl/documents/40554/93114/Ramaker_2020_The_effect_of_thermal_energy_recovery_on_the_ecology_of_a_small_slow_flowing_freshwater_ecosystem.pdf/a3ea7c88-f6bf-bc42-16de-0552d732cf8a?t=1604396306626'>https://www.ou.nl/documents/40554/93114/Ramaker_2020_The_effect_of_thermal_energy_recovery_on_the_ecology_of_a_small_slow_flowing_freshwater_ecosystem.pdf/a3ea7c88-f6bf-bc42-16de-0552d732cf8a?t=1604396306626</a>."
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
        this.results = [
            new Result("Temperatuursverschil gehele lichaam", "Dit is het temperatuursverschil van het water in de rivier dat langs het systeem stroomt in de tijd dat het systeem aan staat.", 0, "°C"),
            new Result("Minimaal inzuigdebiet", "Het debiet dat moet worden ingezogen door het systeem.", 0, "L/s"),
            new Result("Buis inzuigznelheid", "De snelheid dat het water wordt ingezogen door de buis.", 0, "m/s")
        ];
        this.mixingZoneResult = new MixingZoneResult();
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
    
        this.results[0].value = - (J) / (4186 * (997 * (+results[1]) * s));
        this.results[1].value = (((J) / s) / (4186 * (+results[4]))) / 997 * 1000;

        let heatCloud = Math.sqrt((((J / s)) / ((+results[5]) * v * (Math.abs( -(4.48 + 0.049 * (+results[7]) + ((3.5 + 2 * (+results[8])) * Math.pow(5000000 / ((+results[5]) * (+results[6]) * 0.9), 0.05))) * (1.12 + 0.018 * (+results[7]) + 0.00158 * Math.pow((+results[7]), 2)) * (+results[4]))))));
        
        this.mixingZoneResult.time = heatCloud;
        this.mixingZoneResult.length = heatCloud * v;
        this.results[2].value = 1.273 * (this.results[1].value / 1000) / Math.pow((+results[9]) / 1000, 2);

        this.mixingZoneResult.temps = [];
        let outgoingTemp = (+results[4]);

        for (let index = 0; index < 4; index++) {
            if (outgoingTemp == 0)
                break;

            if (index != 0) {
                this.mixingZoneResult.temps.push(outgoingTemp -= ((+results[4]) / 4));
            } else {
                this.mixingZoneResult.temps.push(outgoingTemp);
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
    }
}