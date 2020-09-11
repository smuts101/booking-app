import { Component, OnInit } from '@angular/core';
import { ServiceScriptService } from '../service-script.service';
@Component({
  selector: 'app-show-infor',
  templateUrl: './show-infor.component.html',
  styleUrls: ['./show-infor.component.css']
})
export class ShowInforComponent implements OnInit {
 arrayPrint:any={}
  arrayPrint2:any={}
  constructor(    
                   public apiService: ServiceScriptService
                  ) {
                    this.apiService.getName();
                    this.apiService.getSurname();
                    this.apiService.getGender();
                    this.apiService.getID();

                    
                    this.arrayPrint=this.apiService.getPersonalData();
                    this.arrayPrint2=this.apiService.getTransactionData();
                    this.apiService.getCardno();
                    this.apiService.getHolder();
                    this.apiService.getVcc();
                    this.apiService.getValiddate();


                  }

  ngOnInit() {
  }

}
