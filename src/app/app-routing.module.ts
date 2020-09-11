import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonalInforComponent } from './personal-infor/personal-infor.component';
import { TransactionInforComponent } from './transaction-infor/transaction-infor.component';
import { ShowInforComponent } from './show-infor/show-infor.component';

const routes: Routes = [
    { path: 'personinfor', component: PersonalInforComponent },
    { path: 'transactiondata', component: TransactionInforComponent },
     { path: 'showinfor', component: ShowInforComponent }
,];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }