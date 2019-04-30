export class Ticker {
    name : string
    symbol : string
    ask : number

    constructor(nm: string, sym: string, ak: number) {
        this.name = nm;
        this.symbol = sym;
        this.ask = ak;
    }

}