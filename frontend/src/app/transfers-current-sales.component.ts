import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionUtils } from './utils/SessionUtils';
import { Transaction } from 'src/model/Transaction';

@Component({
    selector: 'app-transfers',
    template: `
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush robo-condensed metallica-border-bot">
                <li class="list-group-item"><span class="metallica-border-left accent1">{{ name }}</span><br>
                <span class="metallica-border-left accent2">{{ seller }}</span><br>
                <span class="metallica-border-left accent3">\${{ price }}</span>/MT<br>
                <span class="metallica-border-left accent4">{{ quantity }} MT</span>
                <button class="btn btn-primary metallica-component" (click)="purchase()">Buy</button></li>
            </ul>
        </div>
    `
})
export class TransfersComponent implements OnInit {

    @Input('id') id: number
    @Input('name') name: string
    @Input('seller') seller: string
    @Input('price') price: number
    @Input('quantity') quantity: number
    sessionUtils: SessionUtils

    constructor(private http: HttpClient, private router: Router) {
        this.sessionUtils = new SessionUtils()
    }

    ngOnInit() {
    }

    purchase() {
        console.log("Trade id = "+this.id)
        var uID: number = this.sessionUtils.getCurrentParty().userID
        this.http.post('http://10.151.61.56:8082/api/buyTransaction/?Id='+this.id+'&userId='+uID, "Hello").subscribe((result) => {
            console.log("Result of transaction : "+JSON.stringify(result))
            alert("Successfully purchased!")
            this.http.get('http://10.151.61.192:9090/send?message='+"ID ["+this.id+"] has been sold").subscribe((messageRes) => {
                console.log("Response from Message Queue is : "+JSON.stringify(messageRes))
                // Putting trade details in sessionStorage to use with Payment Gateway later.
                sessionStorage.setItem('TRADE_DETAILS', JSON.stringify(new Transaction(this.id, this.name, this.seller, this.price, this.quantity)))
                console.log("Stored Transaction in sessionStorage : "+JSON.stringify(sessionStorage.getItem('TRADE_DETAILS')))
                this.router.navigate(['/payment'])
            }),
            (error) => {
                console.log("Error occured!")
                console.log(error)
            }
        }),
        (error) => {
            alert("Error Occurred!")
            console.log(error)
        }
    }
}
