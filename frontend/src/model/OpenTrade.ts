import { HttpClient } from '@angular/common/http';
import { Party } from './Party';
import { ProvisionalCommodity } from './ProvisionalCommodity';

export class OpenTrade {

    tradeID: number;
	partyID: number;
	commodityID: number;
	locationID: number;
	price: number;
    quantity: number;
    
    metalName: string = "None"
    partyName: string = "None"

    constructor(tID: number, pID: number, cID: number, lID: number, pr: number, quan: number) {
        this.tradeID = tID;
        this.partyID = pID;
        this.commodityID = cID;
        this.locationID = lID;
        this.price = pr;
        this.quantity = quan;
    }

    initiateNames(http: HttpClient) {
        http.get('http://10.151.61.56:8082/api/getUser/?userId='+this.partyID).subscribe((res) => {
            console.log("Retrieved Party is : "+res)
            var currParty: Party = res as Party
            console.log("currParty = "+currParty)
            this.partyName = currParty.firstName
            console.log("this.partyName = "+this.partyName)
        })
        http.get('http://10.151.61.56:8082/api/?id='+this.commodityID).subscribe((res) => {
            console.log("Retrieved Commodity is : "+res)
            var currCommodity: ProvisionalCommodity = res as ProvisionalCommodity
            console.log("currCommodity = "+currCommodity)
            this.metalName = currCommodity.commodityName
            console.log("this.metalName = "+this.metalName)
        })
    }


}