export class Commodity{

    delay: Number
    bid: Number
    mid: Number
    ask: Number
    spread: Number
    name: String
    symbol: String
    currency: String
    date: String
    time: String

    constructor( Delay: Number,  Bid: Number,  Mid: Number,  Ask: Number,  Spread: Number,  Name: String,  Symbol: String,  Currency: String,  Date: String,  Time: String){
        this.delay = Delay
        this.bid = Bid
        this.mid = Mid
        this.ask = Ask
        this.spread = Spread
        this.name = Name
        this.symbol = Symbol
        this.currency = Currency
        this.date = Date
        this.time = Time


    }

}