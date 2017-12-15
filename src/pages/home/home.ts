import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SaleforceDetail } from '../salesforcedetail/salesforcedetail';
import { WorkshopPage } from '../workshop/workshop';
import { ServicenowDetail } from '../servicenowdetail/servicenowdetail';
import { WorkshopDetail } from '../workshopdetail/workshopdetail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
    listItemClick(item) {
      if (item === "salesforce")
          this.navCtrl.push(SaleforceDetail);
	   else if(item ==="workshop")
          this.navCtrl.push(WorkshopDetail);
       else if (item ==="servicenow")
        this.navCtrl.push(ServicenowDetail);	 
    }
}
