import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    template: `
    <nav class="navbar navbar-expand-lg navbar-light metallica-border-left">
      <img src="./assets/logo.png">
      <a class="navbar-brand eczarified" routerLink="/">Metallica</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link metallica-border-sides" href="/trades">Trades <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link metallica-border-sides" href="/transfers">Transfers</a>
          </li>
        </ul>
        <span class="navbar-text robo-condensed metallica-border-bot far-end">
          {{username}}
        </span>
      </div>
    </nav>
    `
})

export class NavbarComponent implements OnInit {

  username : string
    constructor() { }

    ngOnInit() {
      this.username = "Lorem"
     }
}

