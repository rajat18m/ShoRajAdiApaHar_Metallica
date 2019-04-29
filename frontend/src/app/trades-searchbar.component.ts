import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchFilters } from 'src/model/SearchFilters';
import { Side } from 'src/model/NominatedTrade';

@Component({
    selector: 'app-trades-searchbar',
    template: `
    <div class="card metallica-border-verticals">
    <form>
        <div class="row">
            <div class="col">
                <span class="metallica-border-left accent1">From</span>
                <input #from type="date" class="form-control margin-top" name="fromDate">
            </div>
            <div class="col">
                <span class="metallica-border-left accent2">To</span>
                <input #to type="date" class="form-control margin-top" name="toDate">
            </div>
            <div class="col">
                <span class="metallica-border-left accent3">Commodity</span>
                <select #metalName class="form-control margin-top">
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
            <select #side class="form-control margin-top">
                <option>Buy</option>
                <option>Sell</option>
            </select>
            </div>
            <div class="col">
            <span class="metallica-border-left accent4">Counterparty</span>
            <select #counterparty class="form-control margin-top">
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
                <button type="submit" class="btn btn-primary metallica-component" (click)="filterSearch(from.value, to.value, metalName.value, side.value, counterparty.value)">Search</button>
            </div>
        </div>
    </form>
    </div>
    `
})
export class TradesSearchBarComponent implements OnInit {

    @Output() searchFilters = new EventEmitter<SearchFilters>();

    constructor() { }

    ngOnInit() { }

    filterSearch(from, to, mName, side, counterparty) {
        var filters = new SearchFilters(from as Date, to as Date, mName as string, side as Side, counterparty as string);
        console.log("Filters are : "+filters)
        this.searchFilters.emit(filters);
    }
}
