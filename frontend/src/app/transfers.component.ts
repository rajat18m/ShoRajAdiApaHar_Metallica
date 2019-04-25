import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-transfers-tab',
  template: `
    <div class="row pad-bot">
      <app-navbar></app-navbar>
    </div>
    <br>
    <div class="row">
      <app-transfer-sell-item></app-transfer-sell-item>
    </div>
    <br>
    <br>
    <div class="row">
      <app-transfers-searchbar></app-transfers-searchbar>
    </div>
    <br>
    <br>
    <br>
    <h4 class="eczarified metallica-border-left" style="margin-top: 8px;">Market</h4>
    <br>
    <div class="row">
      <app-transfers *ngFor="let metal of metals" [name]="metal.name" [seller]="metal.seller" [price]="metal.price" [quantity]="metal.quantity"></app-transfers>
    </div>
    `
})
export class TransfersTabComponent implements OnInit {

  metals: Array<Metal> = []

  constructor() { }

  ngOnInit() {
    this.metals = [
      { name: "Iron", seller: "Ipsum", price: 2171, quantity: 234 },
      { name: "Copper", seller: "Dolor", price: 2534, quantity: 465 },
      { name: "Steel", seller: "Dolor", price: 1233, quantity: 546 },
      { name: "Bronze", seller: "Sit", price: 546, quantity: 854 },
      { name: "Aluminium", seller: "Amet", price: 423, quantity: 342 },
      { name: "Diamond", seller: "Consectitor", price: 9877, quantity: 24 }
    ]
   }
}
