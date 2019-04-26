import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { TransfersComponent } from './transfers-current-sales.component';
import { TransfersSellItemComponent } from './transfers-sell-item.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { TransfersTabComponent } from './transfers.component';
import { TradesSearchBarComponent } from './trades-searchbar.component';
import { TradesTabComponent } from './trades.component';
import { TradesViewAllComponent } from './trades-viewtrades.component';
import { TradesTableHeaderComponent } from './trades-table-header.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, TransfersComponent, TransfersSellItemComponent,
    LoginComponent, RegisterComponent, TransfersTabComponent, TradesSearchBarComponent, TradesTabComponent,
    TradesViewAllComponent, TradesTableHeaderComponent, SearchPipe
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
