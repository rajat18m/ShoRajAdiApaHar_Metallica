import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticker } from 'src/model/Ticker';

@Component({
  selector: 'market-data',
  template: `
  <div class="metallica-border-left">
    <div class="market-data">
      <data-holder *ngFor="let commodity of commodities" [name]="commodity.name" [symbol]="commodity.symbol" [ask]="commodity.ask"></data-holder>
    </div>
  </div>
  `
})

export class MarketDataComponent implements OnInit{
  title = 'Live Market Data';

  commodities: Array<Ticker> = []

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get('https://globalmetals.xignite.com/xGlobalMetals.json/GetRealTimeMetalQuotes?Symbols=XAUKG,XAGKG,XPTKG,XPDKG&Currency=USD&_fields=Name,Symbol,Ask&_token=12600EFFF7E243E3BBB6B8BEBD6BC29A')
    .subscribe((res)=>{
      console.log("Market Data"+JSON.stringify(res))
      var arr: Array<any> = res as Array<any>
      arr.forEach((elem) => {
        var name = elem["Name"].replace("Kg", "MT")
        var price = (elem["Ask"] as number) * 1000
        var currTicker : Ticker = new Ticker(name, elem["Symbol"], price)
        this.commodities.push(currTicker)
      })
      console.log("this.commodities = "+this.commodities);
    })
  }
}
