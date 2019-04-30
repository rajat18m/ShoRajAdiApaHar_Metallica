export class NewTrade {

    metalName: string
    price: number
    quantity: number
    userId: number

    constructor(mName: string, pr: number, quan: number, id: number) {
        this.metalName = mName;
        this.price = pr;
        this.quantity = quan;
        this.userId = id;
    }

}