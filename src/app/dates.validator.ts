import { AbstractControl } from "@angular/forms";
import { FormGroup } from '@angular/forms';


export function datesValidation(
                                dayChckin:string,
                                monthChckin:string,
                                yearChckin:string,
                                yearChckout:string,
                                monthChckout:string,
                                dayChckout:string
  ){
  return(formGroup:FormGroup)=>{
                               const cntlDayIn = formGroup.controls[dayChckin];
                               const cntlYearIn = formGroup.controls[yearChckin];
                               const cntlMonthsIn = formGroup.controls[monthChckin];

                               const cntlDayOut = formGroup.controls[dayChckout];
                               const cntlYearOut = formGroup.controls[yearChckout];
                               const cntlMonthsOut = formGroup.controls[monthChckout];

  if(cntlDayIn.value < getDays()){
                               cntlDayIn.setErrors({"dayLessThan":true})
    }
     if(cntlYearIn.value < getYear()){
                               cntlYearIn.setErrors({"yearLessThan":true})
     }  
       if(cntlMonthsIn.value < getMonths() ){
                               cntlMonthsIn.setErrors({"monthLessThan":true})
     }
      if( cntlMonthsOut.value < cntlMonthsIn.value && cntlYearOut.value < cntlYearIn.value){
                               cntlMonthsOut.setErrors({"outLessThanIn":true})
                               cntlYearOut.setErrors({"outLessThanIn":true})
      }

  else{
        cntlYearIn.setErrors(null);
        cntlYearIn.setErrors(null);
        
    }
  }
}


export function cardDateValidation(
                                validMonth:string,
                                validYear:string
                                
  ){
  return(formGroup:FormGroup)=>{
                               const cntlValidMonth = formGroup.controls[validMonth];
                               const cntlValidYear = formGroup.controls[validYear];


     if(cntlValidYear.value > getYear() && cntlValidMonth.value > getMonths()){
                               cntlValidYear.setErrors({"cardExpired":true})
                                cntlValidMonth.setErrors({"cardExpired":true})
     } 
  else{
        cntlValidYear.setErrors(null);
        cntlValidMonth.setErrors(null);
        
    }
  }
}



function getDays(){
let d = new Date();
return (d.getDate())
}
function getMonths(){
let m = new Date();
return (m.getMonth())
}
function getYear(){
let d = new Date();
return (d.getFullYear())
}