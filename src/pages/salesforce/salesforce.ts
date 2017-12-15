import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SaleforceDetail } from '../salesforcedetail/salesforcedetail';
import { WorkshopPage } from '../workshop/workshop';
import { ServicenowDetail } from '../servicenowdetail/servicenowdetail';
@Component({
  selector: 'page-list',
  templateUrl: 'salesforce.html'
})
export class SalesforcePage {
   
    constructor(public navCtrl: NavController, public navParams: NavParams)
      	{
                           
    	}
		
	listItemClick(item) {
      if (item === "salesforce")
          this.navCtrl.push(SaleforceDetail);
	   else if(item ==="workshop")
          this.navCtrl.push(WorkshopPage);
     else
        this.navCtrl.push(ServicenowDetail);	 
    }
}