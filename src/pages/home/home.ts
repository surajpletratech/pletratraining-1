import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SaleforceDetail } from '../salesforcedetail/salesforcedetail';
import { WorkshopPage } from '../workshop/workshop';
import { ServicenowDetail } from '../servicenowdetail/servicenowdetail';
import { WorkshopDetail } from '../workshopdetail/workshopdetail';
import { ICourse } from '../../shared/interfaces';
import { IWorkshop } from '../../shared/interfaces';
import { AddCourse } from '../addcourse/addcourse';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  workshop:IWorkshop=null;
  course:ICourse=null;
  constructor(public navCtrl: NavController) {
       this.workshop = this.getWorkshopDetail();
	   this.course = this.getCourseDetail();
  }    
      
	  getCourseDetail():ICourse{
	    let courseinfo:ICourse ={
		    key: 1,
            CourseName: 'SFDC Admin',
            Location: 'Nyati estate',
            Instructor:'NA',
            Fee: 25000,
            Duration: 35,
            StartDate: '1/1/2018',
			};

            return courseinfo;
		  } 
      
	  getWorkshopDetail():IWorkshop {
	    let coursedetail:IWorkshop ={
		   key: 1,
            CourseName: 'SFDC Admin',
            Location: 'ABC College',
            Instructor:'NA',
            Fee: 25000,
            Duration: 35,
            StartDate: '15/1/2018',
			};

            return coursedetail;
		}
	 
	 addCourse(){
	      this.navCtrl.push(AddCourse);
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
