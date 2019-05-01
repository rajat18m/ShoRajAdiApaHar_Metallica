export class TradeToSee {

    id: number
    name: string
    seller: string
    price: number
    quantity: number

    constructor(i: number, nm: string, sel: string, pr: number, quan: number) {
        this.id = i
        this.name = nm
        this.seller = sel
        this.price = pr
        this.quantity = quan
    }

}