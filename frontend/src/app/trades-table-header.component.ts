import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-trades-table-header',
    template: `
    <div class="row metallica-border-verticals">
    <div class="col">
        <span class="metallica-border-left-no-pad accent1 margin-top">Date</span>
    </div>
    <div class="col">
        <span class="metallica-border-left-no-pad accent2 margin-top">Commodity</span>
    </div>
    <div class="col">
        <span class="metallica-border-left-no-pad accent3 margin-top">Side</span>
    </div>
    <div class="col">
        <span class="metallica-border-left-no-pad accent4 margin-top">Quantity</span>
    </div>
    <div class="col">
        <span class="metallica-border-left-no-pad margin-top">Price</span>
    </div>
    <div class="col">
        <span class="metallica-border-left-no-pad accent5 margin-top">Counterparty</span>
    </div>
</div>
    `
})
export class TradesTableHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
