import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'login',
    template: `
    <h3 class="metallica-border-left">Welcome to <span class="eczarified">Metallica</span></h3>
    <br>
    <br>
    <div class="card metallica-border-all" style="width: 20rem;">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password">
  </div>
  

  <button type="submit" class="btn btn-primary metallica-component" routerLink="/transfers">Log In</button>



  <div class="form-group">
  <a class="nav-link metallica-border-left accent1" routerLink="/register">Register</a>

</div>
</form>
</div>
    `
})
// <a class="nav-link" routerLink="/register">Register</a>

export class LoginComponent implements OnInit {
    ngOnInit() {
    }

    
}