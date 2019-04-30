export class ProvisionalCommodity {

    commodityID: number
    commodityIdentifier: string
    commodityName: string

    constructor(cID: number, cIden: string, cName: string) {
        this.commodityID = cID;
        this.commodityIdentifier = cIden;
        this.commodityName = cName;
    }

}