import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-transfer-sell-item',
    template: `
    <div class="card metallica-border-all" style="width: 52.2rem;">
    <form class="form-inline">
        <div class="form-group">
            <label for="exampleFormControlSelect1" class="metallica-border-left-even-pad accent1">Select Metal</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Aluminium</option>
                    <option>Bronze</option>
                    <option>Copper</option>
                    <option>Diamond</option>
                    <option>Iron</option>
                    <option>Steel</option>
                </select>
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput" class="metallica-border-left-even-pad accent3">Price</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Price per MT">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2" class="metallica-border-left-even-pad accent4">Quantity</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Quantity of Metal">
        </div>
        <button type="button" class="btn btn-primary metallica-component">Sell</button>
    </form>
    </div>
    `
})
export class TransfersSellItemComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}