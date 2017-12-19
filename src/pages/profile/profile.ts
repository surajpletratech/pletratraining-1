import { Component } from '@angular/core';
import {
    Alert,
    AlertController,
    IonicPage,
    NavController
} from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
    public userProfile: any;
    public birthDate: string;
	public mobileNumber : number;
    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        public authProvider: AuthProvider,
        public profileProvider: ProfileProvider) {
  }	

  ionViewDidLoad() {
      this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
          this.userProfile = userProfileSnapshot.val();
          this.birthDate = userProfileSnapshot.val().birthDate;
		  this.mobileNumber = userProfileSnapshot.val().mobileNumber;
      });
  }
  logOut(): void {
      this.authProvider.logoutUser().then(() => {
          this.navCtrl.setRoot('LoginPage');
      });
  }

  updateName(): void {
      const alert: Alert = this.alertCtrl.create({
          message: 'Your first name & last name',
          inputs: [
              {
                  name: 'firstName',
                  placeholder: 'Your first name',
                  value: this.userProfile.firstName
              },
              {
                  name: 'lastName',
                  placeholder: 'Your last name',
                  value: this.userProfile.lastName
              }
          ],
          buttons: [
              { text: 'Cancel' },
              {
                  text: 'Save',
                  handler: data => {
                      this.profileProvider.updateName(data.firstName, data.lastName);
                  }
              }
          ]
      });
      alert.present();
  }

  updateDOB(birthDate: string): void {
      this.profileProvider.updateDOB(birthDate);
  }
  
  updateMobile(mobileNumber: number): void {
      this.profileProvider.updateMobile(mobileNumber);
  }

  updateEmail(): void {
      let alert: Alert = this.alertCtrl.create({
          inputs: [
              { name: 'newEmail', placeholder: 'Your new email' },
              { name: 'password', placeholder: 'Your password', type: 'password' }
          ],
          buttons: [
              { text: 'Cancel' },
              {
                  text: 'Save',
                  handler: data => {
                      this.profileProvider
                          .updateEmail(data.newEmail, data.password)
                          .then(() => {
                              console.log('Email Changed Successfully');
                          })
                          .catch(error => {
                              console.log('ERROR: ' + error.message);
                          });
                  }
              }
          ]
      });
      alert.present();
  }
  }