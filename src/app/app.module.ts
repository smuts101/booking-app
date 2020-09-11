import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServiceScriptService } from './service-script.service';


import { PersonalInforComponent } from './personal-infor/personal-infor.component';
import { TransactionInforComponent } from './transaction-infor/transaction-infor.component';
import { ShowInforComponent } from './show-infor/show-infor.component';




@NgModule({
  imports:      [ BrowserModule,FormsModule, AppRoutingModule,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent,PersonalInforComponent,TransactionInforComponent,ShowInforComponent],
  bootstrap:    [ AppComponent ],
  providers: [ ServiceScriptService]
})
export class AppModule { }
