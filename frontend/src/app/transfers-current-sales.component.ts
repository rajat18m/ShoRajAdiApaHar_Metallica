import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionUtils } from './utils/SessionUtils';

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
            this.router.navigate(['/payment'])
        }),
        (error) => {
            alert("Error Occurred!")
            console.log(error)
        }
    }
}
