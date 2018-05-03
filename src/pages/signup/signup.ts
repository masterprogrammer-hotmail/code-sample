import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
//import { HTTP } from '@ionic-native/http';
import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signupData: UserOptions = { username: '', password: '', fname: '', lname: '', email: '', phone: '' };
  submitted = false;
  gravatar_default = "?d=mm&s=140"
  emailHash;
  emailHash2 = '/75124c5e65b97df7d930b22f97847b79';
  imgWidth: string = "140";
  imgHeight: string = "140";
  constructor(public navCtrl: NavController, public userData: UserData, public http: Http) { }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      alert(JSON.stringify(this.signupData));
      //this.userData.signup(this.signup.email, form, signup);
      this.userData.signup(this.signupData.email);
      this.userData.setUserOptionData(this.signupData.email, this.signupData.phone, this.signupData.fname, this.signupData.lname, this.signupData.email, this.signupData.phone);
      //this.testPost();
      this.navCtrl.push(TabsPage);

    }
  }

  onBlur(event: Event) {
    event.type;
    //console.log('onBlur');

    //get the email address
    //console.log(this.signupData.email)

    // hash the email
    this.emailHash = "/" + Md5.hashStr(this.signupData.email)
    console.log(this.emailHash)
  }

  testPost() {

    //alert(JSON.stringify(this.signup));

    // this.http.get('http://ionic.io').subscribe( data => {
    //   alert(JSON.stringify(data))
    // })

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new Headers(headerDict),
    };

    this.http.post('http://melt.valentusfreetour.com/index#form', JSON.stringify({
      // add header to request
      //Access-Control-Allow-Origin  
      ENROLLER: '1471386',
      SOURCE: 'GV!',
      ENROLLER_NAME: 'Mark Stutts',
      PAGE: '1',
      LANGUAGE: 'en',
      STP: 'save',
      FNAME: 'fname3',
      LNAME: 'lname',
      EMAIL: 'dont3@emailme.com',
      PHONE: '8005551212'
    }), requestOptions)
      .subscribe(
      res => {
        //alert(JSON.stringify(res))
        console.log(res);
      },
      err => {
        alert(JSON.stringify(err))
        //console.log("Error occured. " + err);
      })

    // this.http.fetch('https://api.github.com/gists', {
    //   method: 'post',
    //   //body: JSON.stringify(opts)
    //   body: {
    //     ENROLLER: '1471386',
    //     SOURCE: 'GV!',
    //     ENROLLER_NAME: 'Mark Stutts',
    //     PAGE: '1',
    //     LANGUAGE: 'en',
    //     STP: 'save',
    //     FNAME: 'fname3',
    //     LNAME: 'lname',
    //     EMAIL: 'dont3@emailme.com',
    //     PHONE: '9005551212'
    //   }
    // }).then(function(response) {
    //   return response.json();
    // }).then(function(data) {
    //   console.log(data)
    // });



  }

  testPost2(method: string) {
    debugger;
    
    //method = "GET"
    method = "POST"

    var cor = null; // cor stands for Cross-Origin request

    if (XMLHttpRequest) {
      cor = new XMLHttpRequest();
    }
    //else if (window.XDomainRequest) {
    //cor = new XDomainRequest();
    //}
    else {
      alert("Your browser does not support Cross-Origin request!");
      return;
    }

    cor.onreadystatechange = function () {
      if (cor.readyState == 4) {
        console.log(cor.responseText);
      }
    };

    var data = 'Some fake data';
    if (method == 'POST') {
      cor.open('POST', 'http://WayneYe.com/Demo/CORSDemo/CORSDemoServer.aspx', true);
      cor.withCredential = "true";
      cor.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      cor.send('Data=' + data);
    }
    else if (method == 'GET') {
      cor.open('GET', 'http://WayneYe.com/Demo/CORSDemo/CORSDemoServer.aspx?Data=' + data, true);
      cor.withCredential = "true";
      cor.send(null);
    }
  }


}