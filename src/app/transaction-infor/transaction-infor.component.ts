import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ServiceScriptService } from '../service-script.service';

@Component({
  selector: 'app-transaction-infor',
  templateUrl: './transaction-infor.component.html',
  styleUrls: ['./transaction-infor.component.css']
})
export class TransactionInforComponent implements OnInit {
  submitted = false;
 transactionForm:FormGroup;
  constructor(    public fb: FormBuilder,
                  private router: Router,
                  private ngZone: NgZone,
                   private apiService: ServiceScriptService
                  ) { 
                    this.mainForm();
                  }
 mainForm() {
    this.transactionForm = this.fb.group({
      cardno: ['',[Validators.required, Validators.minLength(8)]],
      bank:['',Validators.required],
      holder:['',Validators.required],
      vcc:['',[Validators.required,Validators.minLength(3)]],
      validDate:['',[Validators.required]]
     
    })
  }
  get f(){
  return this.transactionForm.controls;
}

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
      if(this.transactionForm.invalid){
    return
  }
   this.apiService.setTransactionData(this.transactionForm.value);
   this.router.navigate(['/showinfor']);
    }

}