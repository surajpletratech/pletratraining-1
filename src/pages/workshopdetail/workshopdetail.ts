import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

import { IWorkshop } from '../../shared/interfaces';

@Component({
  selector: 'page-home',
  templateUrl: 'workshopdetail.html'
})
export class WorkshopDetail {
   workshop: IWorkshop = null;
   constructor(public navCtrl: NavController) {
     this.workshop = this.getWorkshopDetail()   
   }
           getWorkshopDetail():IWorkshop{
		     let coursedetail: IWorkshop = {
		    key: 1,
            CourseName: 'SFDC Admin',
            Location: 'ABC College',
            Instructor:'NA',
            Fee: 25000,
            Duration: 8,
            StartDate: '15/1/2018',
		   }
		   return coursedetail;
		};
     paymentDetail()
		{
         this.navCtrl.push(PaymentPage);
        }
		
 }    