import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-transfers-searchbar',
    template: `
    <div class="card metallica-border-all" style="width: 19rem;">
    <div class="search-bar-part">
        <form class="form-inline">
            <input #searchTxt class="form-control mr-sm-2 robo-condensed metallica-border-bot" type="search" placeholder="Search Metal Name" aria-label="Search">
        </form>
    </div>
    </div>
    `
})
export class TransfersSearchBar implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
