import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'res-holder',
    template: `
        <div class="row">
            <div class="col centerify metallica-border-left accent1">
                <span>Identifier : {{name}}</span>
            </div>
            <div class="col centerify metallica-border-left accent4">
                <span>Quantity :  {{quantity}}</span>
            </div>
        </div>
    `
})
export class ResourcesHolderComponent implements OnInit {

    @Input('name') name : string = "None"
    @Input('quantity') quantity: number = 0

    constructor() { }

    ngOnInit(): void { }
}
