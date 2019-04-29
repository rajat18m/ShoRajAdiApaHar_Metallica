import * as sha512 from 'js-sha512';
import { Party } from 'src/model/Party';

export class TokenUtils {

    private token: string = ""

    validateToken(token: string, email: string) : boolean {
        this.token = this.generateAccessToken(email)
        return token == this.token
    }

    generateAccessToken(partyEmail : string) : string {
        var retVal = ""
        var actualParty: Party = null
        // fetch party using email here

        // Generating Access Token by passing concatenated ID and password
        this.sha512It(actualParty.partyID+actualParty.password)

        return retVal
    }

    // Generates Salted Hash
    sha512It(inp: string) : string {

        // First salting
        
        // taking random string to use as salt
        var saltString: string = "fC*4&3E%JR"

        // Editable positions at which the salt will be added
        var positions: Array<number> = [0, Math.floor((inp.length / 2)), Math.floor((inp.length / 3))]

        var saltedInput: string = ""

        // Created Salted String
        for (let index = 0; index < inp.length; index++) {
            const currentChar = inp[index];
            if(positions.includes(index)) {
                saltedInput.concat(saltString)
            }
            saltedInput.concat(currentChar)
        }

        // Returning salted and hashed input
        return sha512.sha512(saltedInput)
    }

}