import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commodity } from 'src/model/Commodity';

@Component({
  selector: 'market-data',
  template: `
  <div class="metallica-border-left">
    <div class="market-data">
      <data-holder *ngFor="let commodity of commodities" [name]="commodity.name" [symbol]="commodity.symbol" [currency]="commodity.currency"></data-holder>
    </div>
  </div>
  `
})

export class MarketDataComponent implements OnInit{
  title = 'Live Market Data';

  commodities: Array<Commodity> = []

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get('https://globalmetals.xignite.com/xGlobalMetals.json/GetRealTimeMetalQuotes?Symbols=XAUKG,XAGKG,XPTKG,XPDKG&Currency=INR&_fields=Name,Symbol,Ask&_token=12600EFFF7E243E3BBB6B8BEBD6BC29A')
    .subscribe((res: Array<Commodity>)=>{
      console.log("Market Data"+res)
      this.commodities = res;
      console.log("this.commodities = "+this.commodities);
    })
  }
}
