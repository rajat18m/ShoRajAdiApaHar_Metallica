import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProvisionalCommodity } from 'src/model/ProvisionalCommodity';
import { NewTrade } from 'src/model/NewTrade';
import { SessionUtils } from './utils/SessionUtils';

@Component({
    selector: 'app-transfer-sell-item',
    template: `
    <div class="card metallica-border-all" style="width: 52.2rem;">
    <form class="form-inline">
        <div class="form-group">
            <label for="exampleFormControlSelect1" class="metallica-border-left-even-pad accent1">Select Metal</label>
                <select #metalName class="form-control">
                    <option *ngFor="let commodity of commodities">{{commodity.commodityName}}</option>
                </select>
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput" class="metallica-border-left-even-pad accent3">Price</label>
            <input #commPrice type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Price per MT">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2" class="metallica-border-left-even-pad accent4">Quantity</label>
            <input #commQuantity type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Quantity of Metal">
        </div>
        <button type="button" class="btn btn-primary metallica-component" (click)="sellItem(metalName.value, commPrice.value, commQuantity.value)">Sell</button>
    </form>
    </div>
    `
})
export class TransfersSellItemComponent implements OnInit {

    commName: string = ""
    commodities: Array<ProvisionalCommodity> = []
    sessionUtils: SessionUtils

    constructor(private http: HttpClient) {
        this.sessionUtils = new SessionUtils()
    }

    ngOnInit(){
        this.http.get('http://10.151.61.56:8082/api/com').subscribe((res) => {
            console.log("Obtained Commodities : "+JSON.stringify(res))
            this.commodities = res as Array<ProvisionalCommodity>
            console.log("this.commodities = "+JSON.stringify(this.commodities))
        })
    }

    sellItem(nm, price, quantity) {
        var sellPrice: number = price as number
        var sellQuantity: number = quantity as number
        this.commName = nm as string
        console.log("Values before selling item : "+sellPrice+", "+sellQuantity+", "+this.commName)
        // Now, creating NewTrade object to post.
        var newTrade: NewTrade = new NewTrade(this.commName, sellPrice, sellQuantity, this.sessionUtils.getCurrentParty().userID)
        console.log("newTrade = "+JSON.stringify(newTrade))
        this.http.post('http://10.151.61.56:8082/api/createTransaction', newTrade).subscribe((res) => {
            console.log(JSON.stringify(res))
        },
        (error) => {
            console.log(JSON.stringify(error))
        }
        )
        // Now, reloading the page to show updated trade.
        window.location.reload()
    }

}
