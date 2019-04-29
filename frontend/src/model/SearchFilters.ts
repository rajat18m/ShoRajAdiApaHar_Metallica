import { Side } from './NominatedTrade';

export class SearchFilters {

    fromDate: Date
    toDate: Date
    metalName: string
    side: Side
    counterpartyName: string

    constructor(from: Date, to: Date, mName: string, sd: Side, cpName: string) {
        this.fromDate = from
        this.toDate = to
        this.metalName = mName
        this.side = sd
        this.counterpartyName = cpName
    }


}