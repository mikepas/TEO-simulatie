export class MixingZoneResult {
    length: number;
    time: number;
    temps: number[];

    constructor() {
        this.length = 0;
        this.time = 0;
        this.temps = [0, 0, 0, 0];
    }
}