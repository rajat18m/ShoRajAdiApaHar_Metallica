import { HttpClient } from '@angular/common/http';
import { Party } from './Party';
import { ProvisionalCommodity } from './ProvisionalCommodity';
import { Observable } from 'rxjs';
import { TradeToSee } from './TradeToSee';

export class OpenTrade {

    tradeID: number;
    partyID: number;
    commodityID: number;
    locationID: number;
    price: number;
    quantity: number;

    metalName: string
    partyName: string

    constructor(tID: number, pID: number, cID: number, lID: number, pr: number, quan: number) {
        this.tradeID = tID;
        this.partyID = pID;
        this.commodityID = cID;
        this.locationID = lID;
        this.price = pr;
        this.quantity = quan;
    }

    initiateNames(http: HttpClient): Observable<TradeToSee> {
        return new Observable((observer) => {
            http.get('http://10.151.61.56:8082/api/getUser/?userId=' + this.partyID).subscribe((res) => {
                console.log("Retrieved Party is : " + JSON.stringify(res))
                var currParty: Party = new Party(res["partyID"], res["password"], res["firstName"], res["lastName"], res["location"], res["email"], res["assets"])
                console.log("currParty = " + JSON.stringify(currParty))
                this.partyName = currParty.firstName
                console.log("this.partyName = " + this.partyName)
                http.get('http://10.151.61.56:8082/api/singleCom/?id=' + this.commodityID).subscribe((result) => {
                    console.log("Retrieved Commodity is : " + JSON.stringify(result))
                    console.log("Commodity Name: "+result["commodityName"])
                    var currCommodity: ProvisionalCommodity = new ProvisionalCommodity(result["commodityID"] as number, result["commodityIdentifier"], result["commodityName"])
                    console.log("currCommodity = " + JSON.stringify(currCommodity))
                    this.metalName = currCommodity.commodityName
                    console.log("this.metalName = " + JSON.stringify(this.metalName))
                    console.log("Trade ID : "+this.tradeID)
                    var tradeToSee: TradeToSee = new TradeToSee(this.tradeID, this.metalName, this.partyName, this.price, this.quantity)
                    console.log("new TradeToSee : "+JSON.stringify(tradeToSee))
                    observer.next(tradeToSee)
                    observer.complete()
                })
            })
        })
    }


}