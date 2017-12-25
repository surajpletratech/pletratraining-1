import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase, { Unsubscribe } from 'firebase';
import { firebaseConfig } from './credentials';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any;
    pages: Array<{ title: string, component: any, param: any }>;

  constructor(platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen) {
      firebase.initializeApp(firebaseConfig);
      const unsubscribe: Unsubscribe = firebase
          .auth()
          .onAuthStateChanged(user => {
              if (!user) {
                  this.rootPage = 'LoginPage';
                  unsubscribe();
              } else {
                  this.rootPage = HomePage;
                  unsubscribe();
              }
          });

      this.pages = [
          { title: 'Home', component: HomePage, param: '' },
          { title: 'Salesforce Workshop', component: HomePage, param:'SW' },
          { title: 'Salesforce Admin', component: HomePage, param: 'SA' },
          { title: 'Salesforce Developer', component: HomePage, param: 'SD' },
          { title: 'Profile', component: 'ProfilePage', param: '' },
          { title: 'Settings', component: 'SettingsPage', param: '' }
      ];

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }

  openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component, { 'param': page.param });
  }
}

