import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { SalesforcePage } from '../pages/salesforce/salesforce';
import { ServicenowPage } from '../pages/servicenow/servicenow'; 
import { SaleforceDetail } from '../pages/salesforcedetail/salesforcedetail';
import { PaymentPage } from '../pages/payment/payment';
import { WorkshopPage } from '../pages/workshop/workshop'; 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { SignoutPage } from '../pages/signout/signout';
import { SettingPage } from '../pages/setting/setting';
import { ServicenowDetail } from '../pages/servicenowdetail/servicenowdetail';
import { WorkshopDetail } from '../pages/workshopdetail/workshopdetail';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ListPage,
	SalesforcePage,
	ServicenowPage,
	WorkshopPage,
	SaleforceDetail,
	PaymentPage,
	SignupPage,
	ProfilePage,
	SignoutPage,
	SettingPage,
	ServicenowDetail,
	WorkshopDetail,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  //  ListPage,
	SalesforcePage,
	ServicenowPage,
	WorkshopPage,
	SaleforceDetail,
	PaymentPage,
	SignupPage,
	ProfilePage,
	SignoutPage,
	SettingPage,
	ServicenowDetail,
	WorkshopDetail,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
