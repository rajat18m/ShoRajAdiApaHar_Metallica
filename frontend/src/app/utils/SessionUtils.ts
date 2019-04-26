import { Party } from 'src/model/Party';
import { TokenUtils } from './TokenUtils';

export class SessionUtils {

    private tokenUtils: TokenUtils

    storeParty(party: Party) {
        console.log("Storing object : "+JSON.stringify(party))
        localStorage.setItem('LOCAL_PARTY', JSON.stringify(party))
    }

    getCurrentParty() : Party {
        console.log("Getting item : "+localStorage.getItem('LOCAL_PARTY'))
        return JSON.parse(localStorage.getItem('LOCAL_PARTY')) as Party
    }

    validatePartyOnLogin(party: Party) : boolean {
        var actualParty: Party = this.getPartyByEmail(party.email)
        console.log("Actual party is : "+actualParty+"\nInputted party is : "+party)
        return ((party.partyID == actualParty.partyID) && (party.password == actualParty.password))
    }

    // Using an OAuth type of Token-based authentication here
    validatePartyDuringSession() : boolean {
        var currentParty: Party = this.getCurrentParty()
        // Now, checking tokens.
        return this.tokenUtils.validateToken(this.tokenUtils.generateAccessToken(currentParty.email), currentParty.email)
    }

    getPartyByEmail(email: string) : Party {
        var retVal: Party = null
        // Call backend API
        console.log("Received Party : "+retVal+" from REST Service")
        return retVal
    }

}