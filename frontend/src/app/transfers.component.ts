import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { OpenTrade } from 'src/model/OpenTrade';
import { HttpClient } from '@angular/common/http';
import { SessionUtils } from './utils/SessionUtils';
import { Router } from '@angular/router';

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
      <div class="card metallica-border-all" style="width: 14rem;">
        <div class="search-bar-part">
            <form class="form-inline">
              <input #searchTxt (keyup)="0" type="text" class="form-control mr-sm-2 robo-condensed metallica-border-bot" placeholder="Search Metal Name" aria-label="Search">
            </form>
        </div>
      </div>
    </div>
    <br>
    <h4 class="eczarified metallica-border-left" style="margin-top: 8px;">Market</h4>
    <br>
    <div class="row">
      <app-transfers *ngFor="let metal of metals | search:searchTxt.value" [name]="metal.metalName" [seller]="metal.partyName" [price]="metal.price" [quantity]="metal.quantity"></app-transfers>
    </div>
    `
})
export class TransfersTabComponent implements OnInit {

  sessionUtils: SessionUtils

  metals: Array<OpenTrade> = []


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.sessionUtils = new SessionUtils()
    if(this.sessionUtils.getCurrentParty() == null) {
      console.log("Failed authentication! Nice try hacker boy!")
      this.router.navigate(['/error'])
    }
    var uID: number = this.sessionUtils.getCurrentParty().userID
    this.http.get('http://10.151.61.56:8082/api/fetchOpenTrades/?userId='+uID).subscribe((res) => {
      console.log("Received Open trades : "+JSON.stringify(res))
      this.metals = res as Array<OpenTrade>
      console.log("Before initiating names, this.metals = "+this.metals)
      this.metals.forEach(elem => {
        elem.initiateNames(this.http);
      })
      console.log("After initiating names, this.metals = "+this.metals)
    })

   }
   
}
