import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { OpenTrade } from 'src/model/OpenTrade';
import { HttpClient } from '@angular/common/http';
import { SessionUtils } from './utils/SessionUtils';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TradeToSee } from 'src/model/TradeToSee';
import { DBAsset } from 'src/model/DBAsset';
import { Party } from 'src/model/Party';

@Component({
  selector: 'app-transfers-tab',
  template: `
    <div class="row pad-bot">
      <app-navbar></app-navbar>
    </div>
    <br>
    <div class="row metallica-border-left">
      <app-transfer-sell-item></app-transfer-sell-item>
    </div>
    <br>
    <br>
    <div class="row metallica-border-left">
      <div class="col card metallica-border-all" style="width: 14rem;">
        <div class="search-bar-part">
            <form class="form-inline">
              <input #searchTxt (keyup)="0" type="text" class="form-control mr-sm-2 robo-condensed metallica-border-bot" placeholder="Search Metal Name" aria-label="Search">
            </form>
        </div>
      </div>
      <div class="col card metallica-border-all accent2" style="width: 32rem;padding-left: 3rem;padding-right:3rem;">
        <res-holder *ngFor="let resource of resources" [name]="resource.name" [quantity]="resource.quantity"></res-holder>
      </div>
    </div>
    <br>
    <h4 class="eczarified metallica-border-left" style="margin-top: 8px;">Market</h4>
    <br>
    <div class="row">
      <app-transfers *ngFor="let metal of metals | search:searchTxt.value" [id]="metal.id" [name]="metal.name" [seller]="metal.seller" [price]="metal.price" [quantity]="metal.quantity"></app-transfers>
    </div>
    `
})
export class TransfersTabComponent implements OnInit {

  sessionUtils: SessionUtils

  metals: Array<TradeToSee>

  resources: Array<DBAsset>

  constructor(private http: HttpClient, private router: Router) {
    this.resources = []
  }

  ngOnInit() {
    this.sessionUtils = new SessionUtils()
    if (this.sessionUtils.getCurrentParty() == null) {
      console.log("Failed authentication! Nice try hacker boy!")
      this.router.navigate(['/error'])
    }

    this.initialize().subscribe((result) => {
      console.log("Result of Conversion is : " + JSON.stringify(result))
      this.metals = result as Array<TradeToSee>
      console.log("After initiating names, this.metals = " + JSON.stringify(this.metals))
    })

  }

  initialize(): Observable<Array<TradeToSee>> {
    return new Observable((observer) => {
      this.http.get('http://10.151.61.56:8082/api/getUser/?userId=' + this.sessionUtils.getCurrentParty().userID).subscribe((currentParty) => {
        var currPar: Party = currentParty as Party
        var assets: Array<any> = currPar.assets
        console.log("Received assets : "+JSON.stringify(assets)+" from REST API")
        assets.forEach((asset) => {
          this.resources.push(new DBAsset(asset["commodityIdentifier"], asset["quantity"]))
        })
        console.log("Processed resources : "+JSON.stringify(this.resources))
        var uID: number = currPar.userID
        this.http.get('http://10.151.61.56:8082/api/fetchOpenTrades/?userId=' + uID).subscribe((res) => {
          console.log("Received Open trades : " + JSON.stringify(res))
          var arr: Array<any> = res as Array<any>
          console.log("arr is : " + JSON.stringify(arr))
          var retVal: Array<TradeToSee> = []
          arr.forEach((elem) => {
            var currentOpenTrade: OpenTrade = new OpenTrade(elem["tradeID"], elem["sellerID"], elem["metID"], elem["locationID"], elem["price"], elem["quantity"])
            console.log("Current Open trade is : " + JSON.stringify(currentOpenTrade))
            // this.initialMetals.push(currentOpenTrade)
            currentOpenTrade.initiateNames(this.http).subscribe((resultantMetal) => {
              console.log("Resultant metal : " + JSON.stringify(resultantMetal))
              retVal.push(resultantMetal)
            })
          })
          observer.next(retVal)
          observer.complete()
        })
      })
    })

  }

}
