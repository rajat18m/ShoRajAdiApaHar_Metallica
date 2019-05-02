export class Transaction {

    tradeID: number
    metalName: string
    sellerName: string
    price: number
    quantity: number

    constructor(tID: number, mName: string, sName: string, pr: number, quan: number) {
        this.tradeID = tID;
        this.metalName = mName;
        this.sellerName = sName;
        this.price = pr;
        this.quantity = quan;
    }

}