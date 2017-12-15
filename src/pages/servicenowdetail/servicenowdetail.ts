import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
@Component({
  selector: 'page-list',
  templateUrl: 'servicenowdetail.html'
})
export class ServicenowDetail {
   
    constructor(public navCtrl: NavController)
      	{
                               
    	}
		paymentDetail()
		{
         this.navCtrl.push(PaymentPage);
        }

}