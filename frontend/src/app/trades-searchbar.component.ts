import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-trades-searchbar',
    template: `
    <div class="card metallica-border-verticals">
    <form>
        <div class="row">
            <div class="col">
                <span class="metallica-border-left accent1">From</span>
                <input type="date" class="form-control margin-top" name="fromDate">
            </div>
            <div class="col">
                <span class="metallica-border-left accent2">To</span>
                <input type="date" class="form-control margin-top" name="toDate">
            </div>
            <div class="col">
                <span class="metallica-border-left accent3">Commodity</span>
                <select class="form-control margin-top">
                    <option>Iron</option>
                    <option>Copper</option>
                    <option>Steel</option>
                    <option>Bronze</option>
                    <option>Aluminium</option>
                    <option>Diamond</option>
                </select>
            </div>
            <div class="col">
            <span class="metallica-border-left">Side</span>
            <select class="form-control margin-top">
                <option>Buy</option>
                <option>Sell</option>
            </select>
            </div>
            <div class="col">
            <span class="metallica-border-left accent4">Counterparty</span>
            <select class="form-control margin-top">
                <option>Lorem</option>
                <option>Ipsum</option>
                <option>Dolor</option>
                <option>Sit</option>
                <option>Amet</option>
                <option>Consectitor</option>
                <option>Adsiping</option>
            </select>
            </div>
            <div class="col margin-top-super">
                <button type="submit" class="btn btn-primary metallica-component">Search</button>
            </div>
        </div>
    </form>
    </div>
    `
})
export class TradesSearchBarComponent implements OnInit {



    constructor() { }

    ngOnInit() { }
}
