import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';
//import { IFDataService } from '../../providers/ifdata-service'
// import { UserData } from '../../providers/user-data';
import { IABService } from '../../providers/iab-service';

// import { UserOptions } from '../../interfaces/user-options';

//import { TabsPage } from '../tabs-page/tabs-page';
import { PopoverController } from 'ionic-angular';
//import { PopoverPage } from '../about-popover/about-popover';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ScheduleFilter2Page } from '../schedule-filter2/schedule-filter2';
// import { WindowsAzure } from 'azure-mobile-apps-client'

@Component({
  selector: 'page-test',
  templateUrl: 'ptest.html'
})
export class TestPage {
  _loader: any;
  submitted = false;
  
  constructor(
    public navCtrl: NavController,
    //private ifdataSvc: IFDataService,
    public popoverCtrl: PopoverController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public _iabSVC: IABService,
    // public windowsAzure: WindowsAzure
  ) {}

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.signup(this.signup.username);
      //this.navCtrl.push(TabsPage);
      console.log("clicked");
    }
  }

  presentLoading() {
    this._loader = this.loadingCtrl.create({
      content: "Getting Injury Finance data from Azure cloud...",
      //duration: 5000
    });
   this._loader.present();
  }

  hideLoading() {
    this._loader.dismiss();
  }

  presentModal() {
    let modal = this.modalCtrl.create(ScheduleFilter2Page);
    modal.present();
  }

  doAzure(){
    console.log("doAzure");
    // this.presentLoading();
    // this.ifdataSvc.getProviders().subscribe(
    //   res => {
    //     //console.log(res.json());
    //     console.log(res.text());
    //     //alert("success");
    //     this.hideLoading();
    //   },
    //     err => { console.log(err) }
    // );

    // this.ifdataSvc.getProviders().toPromise().then(
    //   res => { // Success
    //   console.log(res.json());
    //   },
    //   () => {
    //     console.log("error");
    //   }
    // );

////////////////////////////////////////////////////////////////////////////////

    // this.ifdataSvc.getConfig()
    //   .subscribe(data => this.config = { ...data });

    // this.ifdataSvc.getNewProviders()
    //   .subscribe(data => { console.log(data); });
  }

  doAzureMobile(){
    console.log("local:doAzureMobile");
    //var AzureMobileApps = require('azure-mobile-apps-client');

    //var WindowsAzure: any;
    // var client = new this.windowsAzure.MobileServiceClient("https://getvalentus.azurewebsites.net");
    //   window.alert("MobileServiceClient instance: " + client);

    // var table = client.getTable('TestTable1');
    // console.log(table);

    // var item = { id: '99' };
    // client.getTable('TestTable1').insert(item);
    
  }

  doOpen(url: string) {
    console.log("doOpen");
    window.open(url, "_system"); //_self _system _blank
  }

  doiabOpen(url: string) {
    console.log("doiabOpen");
    this._iabSVC.doiabOpen(url);
  }

}
