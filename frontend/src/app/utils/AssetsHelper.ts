import { Party } from '../../model/Party';
import { NominatedTrade } from '../../model/NominatedTrade';

export class AssetsHelper {

    thisParty: Party
    nominatedTrades: Array<NominatedTrade>

    constructor(party: Party) {
        this.thisParty = party
        this.nominatedTrades = this.fetchNominatedTrades(this.thisParty)
    }

    fetchNominatedTrades(party: Party) : Array<NominatedTrade> {
        var retVal: Array<NominatedTrade> = []
        // Call REST API here and put output in retVal
        return retVal
    }

}