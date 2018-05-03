import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  username: string;
  gravatar_default = "?d=mm&s=140"
  emailHash;
  emailHash2 = '/75124c5e65b97df7d930b22f97847b79';
  imgWidth: string = "140";
  imgHeight: string = "140";
  constructor(public alertCtrl: AlertController, public nav: NavController, public userData: UserData) {

  }

  ngAfterViewInit() {
    this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.userData.setUsername(data.username);
        this.getUsername();
      }
    });

    alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
      this.hashEmail();
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.nav.setRoot('LoginPage');
  }

  support() {
    this.nav.push('SupportPage');
  }

  hashEmail(){
    this.emailHash = "/" + Md5.hashStr(this.username)
    console.log(this.emailHash)
  }
}
