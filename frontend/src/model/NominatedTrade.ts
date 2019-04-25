class NominatedTrade {

    date: Date
    metal: Metal
    side: Side

    constructor(dt: Date, met: Metal, sd: Side) {
        this.date = dt;
        this.metal = met;
        this.side = sd;
    }

}

enum Side {
    BUY = "BUY",
    SELL = "SELL"
}