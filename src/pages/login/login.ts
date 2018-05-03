import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username:'', password: '', fname: '', lname: '', email: '', phone: '' };
  submitted = false;
  _loader: any;

  constructor(
    public navCtrl: NavController, 
    public userData: UserData,
    public loadingCtrl: LoadingController
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username,this.login.password)
      this.navCtrl.push(TabsPage);
    }
  }

  onSecureIFLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      if(this.userData.secureIFLogin(this.login.username,this.login.password)) {
        this.navCtrl.push(TabsPage);
      } else {
        console.log("LOGIN FAILED");
      }
      
    }

  }

  onSecureLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.presentLoading();
        this.userData.secureLogin(this.login.username,this.login.password).then(
          bln => { 
            console.log(bln);
            if(bln) {
              this.navCtrl.push(TabsPage);
              this.hideLoading();
            } else {
              this.hideLoading();
              //alert("login failed");
            }
            
          },
          err => { 
            console.log(err);
            console.log("LOGIN FAILED");
            this.hideLoading();
            //alert("login failed");
          }
        )



      
      
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  presentLoading() {
    this._loader = this.loadingCtrl.create({
      content: "Processing Login, one moment please...",
      //duration: 5000
    });
   this._loader.present();
  }

  hideLoading() {
    this._loader.dismiss();
  }
}
