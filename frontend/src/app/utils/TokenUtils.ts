import * as sha512 from 'js-sha512';
import { Party } from 'src/model/Party';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenUtils {

    private token: string = ""

    validateToken(token: string, email: string, http: HttpClient) : Observable<boolean> {
        return new Observable((observable) => {
            this.generateAccessToken(email, http).subscribe((tok) => {
                this.token = tok
                var retVal : boolean = (token == this.token)
                observable.next(retVal)
                observable.complete()
            })
        })
    }

    generateAccessToken(partyEmail : string, http: HttpClient) : Observable<string> {
        return new Observable((observable) => {
            var retVal = ""
            var actualParty: Party = null
            // fetch party using email here
            http.get('http://10.151.61.56:8082/api/getUserByEmail/?email='+partyEmail).subscribe((res) => {
                console.log("Received user :"+JSON.stringify(res)+"\n as Party with email = "+partyEmail)
                actualParty = res as Party
                // Generating Access Token by passing concatenated ID and password
                retVal = this.sha512It(actualParty.userID+actualParty.password)
                console.log("Salted Hash (retVal) = "+retVal)
                observable.next(retVal)
                observable.complete()
            })
        });
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