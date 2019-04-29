import { Party } from 'src/model/Party';
import { TokenUtils } from './TokenUtils';
import { HttpClient } from '@angular/common/http';

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

    validatePartyOnLogin(party: Party, http: HttpClient) : boolean {
        var actualParty: Party = this.getPartyByEmail(party.email, http)
        // Send get request using email and assign to actualParty
        console.log("Actual party is : "+actualParty+"\nInputted party is : "+party)
        return ((party.partyID == actualParty.partyID) && (party.password == actualParty.password))
    }

    // Using an OAuth type of Token-based authentication here
    validatePartyDuringSession() : boolean {
        var currentParty: Party = this.getCurrentParty()
        // Now, checking tokens.
        return this.tokenUtils.validateToken(this.tokenUtils.generateAccessToken(currentParty.email), currentParty.email)
    }

    getPartyByEmail(email: string, http: HttpClient) : Party {
        var retVal: Party = null
        // Call backend API
        http.get('http://10.151.61.56:8082/getUserByEmail/email?='+email).subscribe((res) => {
            console.log("Received user :"+res+"\n as Party with email = "+email)
            retVal = res as Party
        })
        console.log("Received Party : "+retVal+" from REST Service")
        return retVal
    }

}