import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Party } from 'src/model/Party';
import { SessionUtils } from './utils/SessionUtils';
import { Transaction } from 'src/model/Transaction';

@Component({
    selector: 'payment-page',
    template: `
    <div>
    <app-navbar></app-navbar>
    <div class="card metallica-border-all centerify" style="width: 24rem;">
        <span style="margin: 0 auto;">Congratulations! Trade Successful!</span>
        <img src="../assets/payment.png" style="width: 128px;margin: 0 auto;">
        <a class="btn btn-primary metallica-component" (click)="complete()" style="width: 12rem;margin: 0 auto;">Proceed</a>
    </div>
    </div>
    `
})
export class PaymentPageComponent implements OnInit {

    sessionUtils: SessionUtils

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
        this.sessionUtils = new SessionUtils()
    }

    // Message sending address
    // http://10.151.61.192:9090/send?message="hello" 
    // Message receiving address
    // http://10.151.61.192:9091/receive?message

    complete() {
        var currentParty: Party = this.sessionUtils.getCurrentParty()
        var currentTransaction: Transaction = JSON.parse(sessionStorage.getItem('TRADE_DETAILS')) as Transaction
        console.log("currentTransaction = "+JSON.stringify(currentTransaction))
        // Launching POST Request to Spring Mail API of Notification Service
        this.http.post('http://10.151.61.56:8082/api/sendEmail/?emailId=' + currentParty.email + '&tradeId=' + currentTransaction.tradeID, JSON.stringify(currentTransaction)).subscribe((retVal) => {
            // Now removing trade details from sessionStorage
            sessionStorage.removeItem('TRADE_DETAILS')
            console.log("Removed trade details from sessionStorage for security.")
            console.log("Response from Mail API received. Response is : " + JSON.stringify(retVal))
            // Now, navigating to Trades screen to see the reflected change.
            this.router.navigate(['/trades'])
        },
            (error) => {
                alert("Error occurred!")
                // Removing trade details so that they aren't misused
                sessionStorage.removeItem('TRADE_DETAILS')
                console.log("Error occurred!")
                console.log(error)
                this.router.navigate(['/error'])
            })
    }
}
