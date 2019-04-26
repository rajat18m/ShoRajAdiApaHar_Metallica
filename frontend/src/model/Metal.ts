export class Metal {

    name: string
    seller: string
    price: number
    quantity: number

    constructor(nm : string, sel: string, pr: number, quan: number) {
        this.name = nm;
        this.seller = sel;
        this.price = pr;
        this.quantity = quan;
    }
}