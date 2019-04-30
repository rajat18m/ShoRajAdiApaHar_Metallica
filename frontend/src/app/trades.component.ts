import { Component, OnInit } from '@angular/core';
import { NominatedTrade, Side } from '../model/NominatedTrade';
import { Metal } from 'src/model/Metal';
import { HttpClient } from '@angular/common/http';
import { SessionUtils } from './utils/SessionUtils';
import { Party } from 'src/model/Party';
import { PrototypeNominatedTrade } from 'src/model/PrototypeNominatedTrade';
import { SearchFilters } from 'src/model/SearchFilters';
import { Router } from '@angular/router';

@Component({
    selector: 'app-trades-bar',
    template: `
    <div class="row">
      <app-navbar></app-navbar>
    </div>
    <div class="row">
        <market-data></market-data>
    </div>
    <app-trades-searchbar (searchFilters)="filterTrades($event)"></app-trades-searchbar>
    <app-trades-table-header></app-trades-table-header>
    <app-trades-viewall *ngFor="let nTrade of nominatedTrades" [nominatedTrade]="nTrade"></app-trades-viewall>
    `
})
export class TradesTabComponent implements OnInit {

    nominatedTrades: Array<NominatedTrade> = []
    metals: Array<Metal> = []
    sessionUtils: SessionUtils

    constructor(private http: HttpClient, private router: Router) {
        this.sessionUtils = new SessionUtils()
    }

    ngOnInit() {
        // Getting current user
        var currentParty: Party = this.sessionUtils.getCurrentParty()

        if(currentParty == null) {
            console.log("Failed Authentication! Nice try hacker boy!")
            this.router.navigate(['/error'])
        }

        // Now adding to list
        this.http.get('http://10.151.61.56:8082/api/viewAll/?userId=' + currentParty.userID.toString()).subscribe((res) => {
            console.log("List of Nominated Trades: " + JSON.stringify(res));
            var arr = res as Array<any>
            arr.forEach(element => {
                var provNomTrade = new PrototypeNominatedTrade(element["tradeID"], element["sellerID"], element["buyerID"], element["metID"], element["locationID"], element["date"], element["price"], element["quantity"])
                provNomTrade.convertToNominatedTrade(this.http, currentParty.userID).subscribe((output) => {
                    this.nominatedTrades.push(output)
                })
            });
        },
        (error) => {
            console.log("Failed Authentication! Nice try hacker boy!")
            this.router.navigate(['/error'])
        }
        )
        console.log("Finished nominatedTrades : " + this.nominatedTrades)

        // Adding metals
        this.nominatedTrades.forEach(elem => {
            if (!this.metals.includes(elem.metal)) {
                this.metals.push(elem.metal)
            }
        })
        console.log("Finished Metals : " + this.metals)
    }

    filterTrades(param) {
        var filters = param as SearchFilters
        var filteredNomTrades = this.nominatedTrades.filter(
            nomTrade => {
                (nomTrade.date >= filters.fromDate) && (nomTrade.date <= filters.toDate) && (nomTrade.metal.name == filters.metalName) && (nomTrade.side == filters.side) && (nomTrade.metal.seller == filters.counterpartyName);
            }
        )
        console.log(filteredNomTrades)
        this.nominatedTrades = filteredNomTrades
    }
}



        // let initDate: Date = new Date("2018-03-16");
        // this.metals = [
        //     { name: "Iron", seller: "Ipsum", price: 2171, quantity: 234 },
        //     { name: "Copper", seller: "Dolor", price: 2534, quantity: 465 },
        //     { name: "Steel", seller: "Dolor", price: 1233, quantity: 546 },
        //     { name: "Bronze", seller: "Sit", price: 546, quantity: 854 },
        //     { name: "Aluminium", seller: "Amet", price: 423, quantity: 342 },
        //     { name: "Diamond", seller: "Consectitor", price: 9877, quantity: 24 }
        //   ]
        // this.nominatedTrades = [
        //     {date: initDate, metal: this.metals.pop(), side: Side.BUY},
        //     {date: initDate, metal: this.metals.pop(), side: Side.SELL},
        //     {date: initDate, metal: this.metals.pop(), side: Side.SELL},
        //     {date: initDate, metal: this.metals.pop(), side: Side.BUY},
        //     {date: initDate, metal: this.metals.pop(), side: Side.SELL},
        //     {date: initDate, metal: this.metals.pop(), side: Side.BUY},
        // ]