import { AuthGuardService } from './services/auth-guard.service';
import { AuthServiceService } from './services/auth-service.service';
import { DashboardService } from './services/dashboard.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module'


import {AngularFireModule} from '@angular/fire'
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component'

import { BorrowerComponent } from './borrower/borrower.component';
import { BorrowerCardComponent } from './borrower-card/borrower-card.component';
import { LenderComponent } from './lender/lender.component';
import { AddNewLBComponent } from './add-new-lb/add-new-lb.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    LoginComponent,
    BorrowerComponent,
    BorrowerCardComponent,
    LenderComponent,
    AddNewLBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},

      {path:'', component:DashboardComponent,canActivate:[AuthGuardService]},
      {path:'Borrower',component:BorrowerComponent,canActivate:[AuthGuardService]},
      {path:'Lender',component:LenderComponent,canActivate:[AuthGuardService]},
      {path:'addNew',component:AddNewLBComponent,canActivate:[AuthGuardService]}

    ])

  ],
  providers: [
    DashboardService,
    AuthServiceService,
    AuthGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
