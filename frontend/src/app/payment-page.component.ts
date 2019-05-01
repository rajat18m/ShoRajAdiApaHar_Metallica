import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    constructor(private router: Router) { }

    ngOnInit(): void { }

    complete() {
        this.router.navigate(['/trades'])
    }
}
