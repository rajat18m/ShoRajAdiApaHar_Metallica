import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchFilters } from 'src/model/SearchFilters';
import { Side } from 'src/model/NominatedTrade';
import { Party } from 'src/model/Party';
import { HttpClient } from '@angular/common/http';
import { ProvisionalCommodity } from 'src/model/ProvisionalCommodity';

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
                    <option *ngFor="let commodity of commodities">{{commodity.commodityName}}</option>
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
                <option *ngFor="let party of parties">{{party.firstName}}</option>
            </select>
            </div>
            <div class="col margin-top-super">
                <a type="submit" class="btn btn-primary metallica-component" (click)="filterSearch(from.value, to.value, metalName.value, side.value, counterparty.value)">Search</a>
            </div>
        </div>
    </form>
    </div>
    `
})
export class TradesSearchBarComponent implements OnInit {

    parties: Array<Party> = []
    commodities: Array<ProvisionalCommodity> = []

    @Output() searchFilters = new EventEmitter<string>();

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get('http://10.151.61.56:8082/api/par/').subscribe((allParties) => {
            var arr : Array<any> = allParties as Array<any>
            arr.forEach((elem) => {
                var currParty: Party = new Party(elem["userID"], elem["password"], elem["firstName"], elem["lastName"], elem["location"], elem["email"], elem["assets"]);
                this.parties.push(currParty)
            })
        });
        this.http.get('http://10.151.61.56:8082/api/com').subscribe((res) => {
            console.log("Obtained Commodities : "+JSON.stringify(res))
            this.commodities = res as Array<ProvisionalCommodity>
            console.log("this.commodities = "+JSON.stringify(this.commodities))
        });
    }

    filterSearch(from, to, mName, side, counterparty) {
        var filters = new SearchFilters(from as Date, to as Date, mName as string, side as Side, counterparty as string);
        console.log("Filters are : "+JSON.stringify(filters))
        this.searchFilters.emit(JSON.stringify(filters));
    }
}
