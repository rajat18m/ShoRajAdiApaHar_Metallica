import { Party } from 'src/model/Party';
import { TokenUtils } from './TokenUtils';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

export class SessionUtils {

    private tokenUtils: TokenUtils = new TokenUtils()

    storeParty(party: Party) {
        console.log("Storing object : " + JSON.stringify(party))
        sessionStorage.setItem('LOCAL_PARTY', JSON.stringify(party))
    }

    getCurrentParty(): Party {
        console.log("Getting item : " + sessionStorage.getItem('LOCAL_PARTY'))
        return JSON.parse(sessionStorage.getItem('LOCAL_PARTY')) as Party
    }

    validatePartyOnLogin(party: Party, http: HttpClient): Observable<boolean> {
        return new Observable((observable) => {
            var actualParty: Party
            this.getPartyByEmail(party.email, http).subscribe((res) => {
                actualParty = res
                // Send get request using email and assign to actualParty
                console.log("Actual party is : " + JSON.stringify(actualParty) + "\nInputted party is : " + JSON.stringify(party))
                var result: boolean = (party.userID == actualParty.userID) && (party.password == actualParty.password)
                observable.next(result)
                observable.complete()
            })
        });
    }

    // Using an OAuth type of Token-based authentication here
    validatePartyDuringSession(http: HttpClient): Observable<boolean> {
        return new Observable((observer) => {
            var currentParty: Party = this.getCurrentParty()
            // Now, checking tokens.
            console.log("Email : " + currentParty.email)
            this.tokenUtils.generateAccessToken(currentParty.email, http).subscribe((tokennnnnn) => {
                var passIt: string = tokennnnnn
                console.log("Token = " + passIt)
                this.tokenUtils.validateToken(passIt, currentParty.email, http).subscribe((bool) => {
                    observer.next(bool)
                    observer.complete()
                },
                    (error) => {
                        observer.next(false)
                        observer.complete()
                    }
                )
            },
                (error) => {
                    observer.next(false)
                    observer.complete()
                })
        })
    }

    getPartyByEmail(email: string, http: HttpClient): Observable<Party> {
        return new Observable(
            (observer) => {
                console.log("Email is : " + email)
                var retVal: Party
                // Call backend API
                http.get('http://10.151.61.56:8082/api/getUserByEmail/?email=' + email).subscribe((res) => {
                    console.log("Received user :" + JSON.stringify(res) + "\n as Party with email = " + email)
                    retVal = new Party(res["userID"], res["password"], res["firstName"], res["lastName"], res["location"], res["email"], res["assets"])
                    console.log("Created object retVal = " + JSON.stringify(retVal))
                    console.log("Received Party : " + JSON.stringify(retVal) + " from REST Service")
                    // return retVal
                    observer.next(retVal)
                    observer.complete()
                },
                    (error) => {
                        console.log("Error occured!")
                        console.log("Full error body : " + JSON.stringify(error))
                        console.log("error.error : " + JSON.stringify(error.error))
                        observer.error(error)
                        observer.complete()
                    })
            });
    }

}