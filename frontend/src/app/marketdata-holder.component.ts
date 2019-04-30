import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'data-holder',
    template: `
    <div>
        <span class="market-data-element"> {{symbol}}, {{name}}, {{currency}} </span>
    </div>
    `
})
export class MarketDataHolderComponent implements OnInit {
    @Input('name') name: string = "None"
    @Input('symbol') symbol: string = "None"
    @Input('currency') currency: string = "None"

    constructor() { }

    ngOnInit(): void { }
}
