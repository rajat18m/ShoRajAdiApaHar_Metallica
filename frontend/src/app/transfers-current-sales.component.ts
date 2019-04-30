import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-transfers',
    template: `
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush robo-condensed metallica-border-bot">
                <li class="list-group-item"><span class="metallica-border-left accent1">{{ name }}</span><br>
                <span class="metallica-border-left accent2">{{ seller }}</span><br>
                <span class="metallica-border-left accent3">\${{ price }}</span>/MT<br>
                <span class="metallica-border-left accent4">{{ quantity }} MT</span>
                <a href="#" class="btn btn-primary metallica-component">Buy</a>
                <input class="form-control form-control-sm quantity-selector metallica-border-all accent4" type="text" placeholder="Quantity"></li>
            </ul>
        </div>
    `
})
export class TransfersComponent implements OnInit {

    @Input('id') id: number = 0
    @Input('name') name: string = "None"
    @Input('seller') seller: string = "No Seller"
    @Input('price') price: number = 0
    @Input('quantity') quantity: number = 0

    constructor() { }

    ngOnInit() {
    }
}
