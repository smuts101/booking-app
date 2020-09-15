import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
//import { ServiceService } from './service.service';
import { ServiceScriptService } from '../service-script.service';
import { datesValidation } from '../dates.validator';

@Component({
  selector: 'app-personal-infor',
  templateUrl: './personal-infor.component.html',
  styleUrls: ['./personal-infor.component.css']
})
export class PersonalInforComponent implements OnInit {
 submitted = false;
 detailsForm:FormGroup;
  constructor(    public fb: FormBuilder,
                  private router: Router,
                  private ngZone: NgZone,
                   private apiService: ServiceScriptService
                  ) { 
                    this.mainForm();
                  }
 mainForm() {
    this.detailsForm = this.fb.group({
      name:new FormControl ('',[Validators.required, Validators.minLength(2)]),
      surname:new FormControl ('',[Validators.required,Validators.minLength(2)]),
      gender:new FormControl ('',[Validators.required]),
      id:new FormControl ('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{13}$")]),
       dayChckin: new FormControl('',[Validators.required]),
    monthChckin: new FormControl('',[Validators.required]),
    yearChckin: new FormControl('',[Validators.required]),
    dayChckout: new FormControl('',[Validators.required]),
    monthChckout: new FormControl('',[Validators.required]),
    yearChckout: new FormControl('',[Validators.required])
    },
   { 
    
      validator: datesValidation("dayChckin","monthChckin","yearChckin","yearChckout","monthChckout","dayChckout")
      

   })
  }

get f(){
  return this.detailsForm.controls;
}

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

  if(this.detailsForm.invalid){
    return
  }


   this.apiService.setPersonalData(this.detailsForm.value);
  console.log(this.apiService.getPersonalData()) 
  this.router.navigate(['/transactiondata']);
    }
  }




