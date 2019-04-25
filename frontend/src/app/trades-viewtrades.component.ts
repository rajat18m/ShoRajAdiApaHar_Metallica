import { Component, OnInit, Input } from '@angular/core';
import { NominatedTrade } from '../model/NominatedTrade';

@Component({
    selector: 'app-trades-viewall',
    template: `
        <br>
        <ul class="list-group list-group-flush">
                <div class="card metallica-border-sides">
                        <li class="list-group-item">
                        <span class="table-item metallica-border-left accent1">{{date | date: 'yyyy-MM-dd'}}</span>
                        <span class="table-item metallica-border-left accent2">{{metalName}}</span>
                        <span class="table-item metallica-border-left accent3">{{side}}</span>
                        <span class="table-item metallica-border-left accent4">{{quantity}} MT</span>
                        <span class="table-item metallica-border-left">{{price}}/MT</span>
                        <span class="table-item metallica-border-left accent5">{{counterpartyName}}</span>
                        </li>
                </div>
        </ul>
    `
})
export class TradesViewAllComponent implements OnInit {

    @Input('nominatedTrade') nominatedTrade: NominatedTrade = null

    date: Date = null

    metalName: string = "None"

    side: string = "None"

    quantity: number = 0

    price: number = 0

    counterpartyName: string = "None"

    constructor() { }

    ngOnInit(){
        this.date = this.nominatedTrade.date
        this.metalName = this.nominatedTrade.metal.name
        this.side = this.nominatedTrade.side.toString()
        this.quantity = this.nominatedTrade.metal.quantity
        this.price = this.nominatedTrade.metal.price
        this.counterpartyName = this.nominatedTrade.metal.seller
    }
}
