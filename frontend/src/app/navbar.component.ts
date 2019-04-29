import { Component, OnInit } from '@angular/core';
import { SessionUtils } from './utils/SessionUtils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light metallica-border-left">
      <img src="./assets/logo.png">
      <a class="navbar-brand eczarified" routerLink="/">Metallica</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link metallica-border-sides" href="/trades">Trades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link metallica-border-sides" href="/transfers">Transfers</a>
          </li>
        </ul>
        <span class="navbar-text robo-condensed metallica-border-left accent1 far-end" (click)="logout()">
          Logout
        </span>
        <span class="navbar-text robo-condensed metallica-border-bot far-end">
          {{username}}
        </span>
      </div>
    </nav>
    `
})

export class NavbarComponent implements OnInit {
  private sessionUtils: SessionUtils
  username: string
  constructor(private router: Router) {
    this.sessionUtils = new SessionUtils();
  }

  ngOnInit() {
    if (!this.sessionUtils.validatePartyDuringSession()) {
      // Redirect to Error Page
      this.router.navigateByUrl('/error')
    }
    else {
      // Setting username
      this.username = this.sessionUtils.getCurrentParty().firstName
    }
  }

  logout() {
    // Clearing storage
    localStorage.clear()
    // Rerouting to login page
    this.router.navigateByUrl('/')
  }
}

