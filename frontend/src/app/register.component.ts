import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'register',
    template: `
    <div class="card metallica-border-all" style="width: 40rem;">
    <form>
    <h2 class="metallica-border-left"> Register</h2>
  <div class="form-row">
    
    <div class="form-group col-md-6">
      <label for="inputFirstName" class="metallica-border-left accent3">First Name</label>
      <input type="firstName" class="form-control" id="inputFirstname" placeholder="First Name">
    </div>

    <br/>
    
    <div class="form-group col-md-6">
      <label for="inputLastName" class="metallica-border-left accent4">Last Name</label>
      <input type="lastName" class="form-control" id="inputLastName" placeholder="Last Name">
    </div>
    
    <br/>
    <div class="form-group col-md-6">
      <label for="inputEmail" class="metallica-border-left accent2">Email</label>
      <input type="Email" class="form-control" id="inputEmail" placeholder="Email">
    </div>

    <br/>
    <div class="form-group col-md-6">
      <label for="inputPassword" class="metallica-border-left accent1">Password</label>
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
    <br/>
</div>
  <button type="submit" class="btn btn-primary metallica-component" routerLink="/">Register</button>
</form>
</div>
    `
})

export class RegisterComponent implements OnInit {
    ngOnInit() {
    }

    
}


