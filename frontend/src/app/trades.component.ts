import { Component, OnInit } from '@angular/core';
import { NominatedTrade } from '../model/NominatedTrade';

@Component({
    selector: 'app-trades-bar',
    template: `
    <div class="row">
      <app-navbar></app-navbar>
    </div>
    <app-trades-searchbar></app-trades-searchbar>
    <app-trades-table-header></app-trades-table-header>
    <app-trades-viewall *ngFor="let nTrade of nominatedTrades" [nominatedTrade]="nTrade"></app-trades-viewall>
    `
})
export class TradesTabComponent implements OnInit {

    nominatedTrades: Array<NominatedTrade> = []
    metals: Array<Metal> = []

    constructor() { }

    ngOnInit() {
        let initDate: Date = new Date("2018-03-16");
        this.metals = [
            { name: "Iron", seller: "Ipsum", price: 2171, quantity: 234 },
            { name: "Copper", seller: "Dolor", price: 2534, quantity: 465 },
            { name: "Steel", seller: "Dolor", price: 1233, quantity: 546 },
            { name: "Bronze", seller: "Sit", price: 546, quantity: 854 },
            { name: "Aluminium", seller: "Amet", price: 423, quantity: 342 },
            { name: "Diamond", seller: "Consectitor", price: 9877, quantity: 24 }
          ]
        this.nominatedTrades = [
            {date: initDate, metal: this.metals.pop(), side: "BUY"},
            {date: initDate, metal: this.metals.pop(), side: "SELL"},
            {date: initDate, metal: this.metals.pop(), side: "SELL"},
            {date: initDate, metal: this.metals.pop(), side: "BUY"},
            {date: initDate, metal: this.metals.pop(), side: "SELL"},
            {date: initDate, metal: this.metals.pop(), side: "BUY"},
        ]
    }
}
