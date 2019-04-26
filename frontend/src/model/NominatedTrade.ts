import { Metal } from './Metal';

export class NominatedTrade {

    date: Date
    metal: Metal
    side: Side

    constructor(dt: Date, met: Metal, sd: Side) {
        this.date = dt;
        this.metal = met;
        this.side = sd;
    }

}

export enum Side {
    BUY = "BUY",
    SELL = "SELL"
}