import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commodity } from './model/Commodity';

@Component({
  selector: 'market-data',
  template: `
  <div class="metallica-border-left">
    <div class="market-data">
      <span class="market-data-element" *ngFor="let commodity in commodities" [name]="commodity.name" [symbol]="commodity.symbol" [currency]="commodity.currency"> {{symbol}}, {{name}}, {{currency}} ]</span>
    </div>
  </div>
  `
})

export class AppComponent implements OnInit{
  title = 'Live Market Data';

  @Input('delay')delay: Number
  @Input('bid')bid: Number
  @Input('mid')mid: Number
  @Input('ask')ask: Number
  @Input('spread')spread: Number
  @Input('name')name: String
  @Input('symbol')symbol: String
  @Input('currency')currency: String
  @Input('date')date: String
  @Input('time')time: String

  commodities: Array<Commodity> = []

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get('https://globalmetals.xignite.com/xGlobalMetals.json/GetRealTimeMetalQuotes?Symbols=XAUKG,XAGKG,XPTKG,XPDKG&Currency=INR&_fields=Name,Symbol,Ask&_token=12600EFFF7E243E3BBB6B8BEBD6BC29A')
    .subscribe((res: Array<Commodity>)=>{
      console.log(res)
      this.commodities = res;
    })
  }
}
