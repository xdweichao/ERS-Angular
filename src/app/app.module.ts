import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReimbursementComponent } from './components/reimbursement/reimbursement.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateNewRequestComponent } from './components/create-new-request/create-new-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReimbursementComponent,
    CreateNewRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
