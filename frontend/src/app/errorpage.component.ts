import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-error',
    template: `
        <div class="centerify metallica-border-left accent1">
            <h1 class="error">Error!</h1>
        </div>
    `
})
export class ErrorComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }
}
