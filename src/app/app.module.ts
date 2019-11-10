import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReimbursementComponent } from './components/reimbursement/reimbursement.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateNewRequestComponent } from './components/create-new-request/create-new-request.component';
import { UsersService } from './shared/users.service';
import { ViewAllTicketsComponent } from './components/view-all-tickets/view-all-tickets.component';
import {MatButtonModule} from '@angular/material/button';
import { ApproveRequestComponent } from './components/approve-request/approve-request.component';
import { DenyRequestComponent } from './components/deny-request/deny-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReimbursementComponent,
    CreateNewRequestComponent,
    ViewAllTicketsComponent,
    ApproveRequestComponent,
    DenyRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
