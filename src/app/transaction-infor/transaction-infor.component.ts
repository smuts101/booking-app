import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ServiceScriptService } from '../service-script.service';
import { cardDateValidation} from '../dates.validator';

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
      cardno:new FormControl( '',[Validators.required,  Validators.pattern("^((\\+91-?)|0)?[0-9]{16}$")]),
      bank:new FormControl('',[Validators.required]),
      holder:new FormControl('',[Validators.required,Validators.minLength(2)]),
      vcc:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{3}$")]),
      validDate:new FormControl('',[Validators.required]),
      validMonth:new FormControl('',[Validators.required]),
      validYear:new FormControl('',[Validators.required])
    },
   { 
    
      validator: cardDateValidation("validMonth","validYear")
      

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