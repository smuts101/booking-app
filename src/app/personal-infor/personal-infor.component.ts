import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { ServiceService } from './service.service';
import { ServiceScriptService } from '../service-script.service';

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
      name: ['',Validators.required],
      surname:['',Validators.required],
      gender:['',Validators.required],
      id:['',[Validators.required, Validators.minLength(13)]]
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




