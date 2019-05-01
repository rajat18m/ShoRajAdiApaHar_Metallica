import { Party } from '../../model/Party';
import { NominatedTrade } from '../../model/NominatedTrade';
import { HttpClient } from '@angular/common/http';
import { SessionUtils } from './SessionUtils';
import { PrototypeNominatedTrade } from 'src/model/PrototypeNominatedTrade';
import { Observable, observable } from 'rxjs';

export class AssetsHelper {

    private http: HttpClient
    thisParty: Party
    sessionUtils: SessionUtils

    constructor(party: Party, ht: HttpClient) {
        this.sessionUtils = new SessionUtils()
        this.http = ht;
        this.thisParty = party
    }

    fetchNominatedTrades(party: Party) : Observable<Array<NominatedTrade>> {
        return new Observable((observer) => {
            var retVal: Array<NominatedTrade> = []
            // Call REST API here and put output in retVal
            this.http.get('http://10.151.61.56:8082/api/viewAll/?userId='+this.sessionUtils.getCurrentParty().userID).subscribe((res) => {
                console.log("Received all nominated trades : "+JSON.stringify(res)+" from REST API")
                var arr: Array<any> = res as Array<any>
                arr.forEach((elem) => {
                    var protoTrade: PrototypeNominatedTrade = new PrototypeNominatedTrade(elem["tradeID"], elem["partyID"], elem["counterpartyID"], elem["commodityID"], elem["locationID"], elem["date"], elem["price"], elem["quantity"])
                    protoTrade.convertToNominatedTrade(this.http, this.sessionUtils.getCurrentParty().userID).subscribe((nomTrade) => {
                        retVal.push(nomTrade)
                    })
                })
                console.log("Completed fetched nominated trades : "+JSON.stringify(retVal))
                observer.next(retVal)
                observer.complete()
            })
        })
    }

}