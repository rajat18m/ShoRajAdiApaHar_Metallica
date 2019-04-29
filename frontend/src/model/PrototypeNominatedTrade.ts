import { NominatedTrade } from './NominatedTrade';
import { Metal } from './Metal';
import { HttpClient } from '@angular/common/http';

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

    convertToNominatedTrade(http: HttpClient) : NominatedTrade {
        var retVal: NominatedTrade;

        var metal: Metal
        
        http.get('http://localhost:8080/').subscribe((res) => {
            console.log("Current Metal : "+res);
            metal = res as Metal;
        })




        return retVal;
    }


}