import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegistrationParty } from 'src/model/RegistrationParty';

@Component({
    selector : 'register',
    template: `
    <div class="card metallica-border-all" style="width: 40rem;">
    <form>
    <h2 class="metallica-border-left"> Register</h2>
  <div class="form-row">
    
    <div class="form-group col-md-6">
      <label for="inputFirstName" class="metallica-border-left accent3">First Name</label>
      <input #fName type="firstName" class="form-control" id="inputFirstname" placeholder="First Name">
    </div>

    <br/>
    
    <div class="form-group col-md-6">
      <label for="inputLastName" class="metallica-border-left accent4">Last Name</label>
      <input #lName type="lastName" class="form-control" id="inputLastName" placeholder="Last Name">
    </div>
    
    <br/>
    <div class="form-group col-md-6">
      <label for="inputEmail" class="metallica-border-left accent2">Email</label>
      <input #email type="Email" class="form-control" id="inputEmail" placeholder="Email">
    </div>

    <br/>
    <div class="form-group col-md-6">
      <label for="inputPassword" class="metallica-border-left accent1">Password</label>
      <input #password type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
    <br/>
</div>
  <button type="submit" class="btn btn-primary metallica-component" (click)="register(fName.value, lName.value, email.value, password.value)">Register</button>
</form>
  <div class="card metallica-border-all accent2 contact-us" style="width: 10rem;">
    <a href="mailto:metallicatrade@gmail.com"><span class="contact-us">Contact Us</span></a>
    <span class="small-text">(In case you previously own assets or would like to register your location)</span>
  </div>
</div>
    `
})

export class RegisterComponent implements OnInit {

    constructor(private http: HttpClient, private router: Router) {

    }

    ngOnInit() {
    }

    register(firstName: string, lastName: string, email: string, password: string) {
      // Sending POST request to register
      this.http.post('http://10.151.61.56:8082/api/par/', new RegistrationParty(password, firstName, lastName, email)).subscribe((result) => {
        console.log("response on registration : "+JSON.stringify(result))
        // Alerting the success
        alert("Successfully Registered!")
        // Now redirecting to login screen
        this.router.navigate(['/'])
      }, (error) => {
        alert("Error occurred!")
        console.log(JSON.stringify(error))
      })
    }

    
}


