import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { TransfersComponent } from './transfers-current-sales.component';
import { TransfersSearchBar } from './transfers-searchbar.component';
import { TransfersSellItemComponent } from './transfers-sell-item.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { TransfersTabComponent } from './transfers.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, TransfersComponent, TransfersSearchBar, TransfersSellItemComponent,
    LoginComponent, RegisterComponent, TransfersTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
