import { Component, OnInit } from '@angular/core';
import { SessionUtils } from './utils/SessionUtils';
import { Party } from 'src/model/Party';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login',
  template: `
    <div class="nav metallica-border-left">
    <img src="./assets/logo.png">
    <h3 class="margin-top">Welcome to <span class="eczarified">Metallica</span></h3>
    </div>
    <br>
    <br>
    <div class="card metallica-border-all" style="width: 20rem;">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input #emailText type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email">
    
  </div>
  <div class="form-group">
    <label for="exampleInpvutPassword1">Password</label>
    <input #passwordText type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password">
  </div>
  

  <button type="submit" class="btn btn-primary metallica-component" (click)="authenticate(emailText.value, passwordText.value)">Log In</button>



  <div class="form-group">
  <a class="nav-link metallica-border-left accent1" routerLink="/register">Register</a>

</div>
</form>
</div>
    `
})
// <a class="nav-link" routerLink="/register">Register</a>

export class LoginComponent implements OnInit {

  private sessionUtils: SessionUtils

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.sessionUtils = new SessionUtils()
  }

  authenticate(em: string, pw: string) {
    // Setting variables
    var currentParty: Party = this.sessionUtils.getPartyByEmail(em, this.http)
    currentParty.password = pw
    // Now Authenticating
    if(this.sessionUtils.validatePartyOnLogin(currentParty, this.http)) {
      // Setting current user
      this.sessionUtils.storeParty(currentParty)
      // Send to transfers page
      this.router.navigateByUrl('/transfers')
    }
    else {
      // Alert user about invalid credentials
      alert("Invalid credentials!")
    }
  }


}