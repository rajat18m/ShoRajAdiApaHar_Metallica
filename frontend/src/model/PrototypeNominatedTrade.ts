import { NominatedTrade, Side } from './NominatedTrade';
import { Metal } from './Metal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class PrototypeNominatedTrade {

    tradeID: number
    partyID: number
    counterpartyID: number
    commodityID: number
    locationID: number
    date: Date
    price: number
    quantity: number

    constructor(tID: number, pID: number, cpID: number, cID: number, locID: number, dt: Date, pr: number, quan: number) {
        this.tradeID = tID;
        this.partyID = pID;
        this.counterpartyID = cpID;
        this.commodityID = cID;
        this.locationID = locID;
        this.date = dt;
        this.price = pr;
        this.quantity = quan;
    }

    convertToNominatedTrade(http: HttpClient, userID: number) : Observable<NominatedTrade> {
        return new Observable((observer) => {
            
        var retVal: NominatedTrade;

        var metal: Metal
        
        http.get('http://10.151.61.56:8082/api/singleCom/?id='+this.commodityID.toString()).subscribe((res) => {
            console.log("Received Metal : "+JSON.stringify(res));
            var id:number
            if(userID == this.partyID) { // Sell 
                id = this.counterpartyID
            }
            else {  // Buy
                id = this.partyID
            }
            console.log("ID is : "+id+", user ID is : "+userID)
            http.get('http://10.151.61.56:8082/api/getUser/?userId='+id).subscribe((party) => {
                console.log("Party is : "+JSON.stringify(party))
                metal = new Metal(res["commodityName"], party["firstName"], this.price, this.quantity);
                console.log("Metal is : "+JSON.stringify(metal))
                var side: Side
                if(userID == this.partyID) {
                    side = Side.SELL
                }
                else {
                    side = Side.BUY
                }
                retVal = new NominatedTrade(this.date, metal, side);
                console.log("Value of retVal[NominatedTrade] is : "+JSON.stringify(retVal))
                observer.next(retVal);
                observer.complete()
            })
        })
        })

    }


}