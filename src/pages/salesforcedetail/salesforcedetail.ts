import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

import { ICourse } from '../../shared/interfaces';

@Component({
  selector: 'page-list',
  templateUrl: 'salesforcedetail.html'
})
export class SaleforceDetail {
   salesforceCourse: ICourse = null;
   
   constructor(public navCtrl: NavController)
      	{
            this.salesforceCourse = this.getCourseDetail();         
    	}
		
		getCourseDetail(): ICourse {
		    let coursedetail: ICourse = {
			key: 1,
            CourseName: 'SFDC Admin',
            Location: 'Nyati estate',
            Instructor:'NA',
            Fee: 25000,
            Duration: 35,
            StartDate: '1/1/2014',
			};

            return coursedetail;
		}
		
		paymentDetail()
		{
         this.navCtrl.push(PaymentPage);
        }

}