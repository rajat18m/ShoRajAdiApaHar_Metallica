import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'data-holder',
    template: `
    <div>
        <span class="market-data-element"> Symbol : {{symbol}}, {{name}}, \${{ask}}/MT </span>
    </div>
    `
})
export class MarketDataHolderComponent implements OnInit {
    @Input('name') name: string = "None"
    @Input('symbol') symbol: string = "None"
    @Input('ask') ask: string = "None"

    constructor() { }

    ngOnInit(): void { }
}
