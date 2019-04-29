import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { TransfersTabComponent } from './transfers.component';
import { TradesTabComponent } from './trades.component';
import { ErrorComponent } from './errorpage.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'transfers', component: TransfersTabComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'trades', component: TradesTabComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
