import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';
//import { IFDataService } from '../../providers/ifdata-service'
// import { IFDataService } from '../../components/providers/ifdata-service'
import { UserData } from '../../providers/user-data';

// import { UserOptions } from '../../interfaces/user-options';

//import { TabsPage } from '../tabs-page/tabs-page';
import { PopoverController } from 'ionic-angular';
//import { PopoverPage } from '../about-popover/about-popover';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ScheduleFilter2Page } from '../schedule-filter2/schedule-filter2';

@Component({
  selector: 'page-if',
  templateUrl: 'pif.html'
})
export class IFPage {
  _loader: any;
  submitted = false;
  
  _items: any;// = [{},{}];

  constructor(
    public navCtrl: NavController,
    // private ifdataSvc: IFDataService,
    public popoverCtrl: PopoverController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public userData: UserData,
    
  ) {}

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.signup(this.signup.username);
      //this.navCtrl.push(TabsPage);
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
    //     console.log(res);
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

  

  ngOnInit() {
    console.log("updated local new provider data");
    //this._items = this.userData._newProviderData;
    // this.ifdataSvc.getNewProviders().subscribe(
    //     res => {
    //       console.log(res.json());
    //       this._items = res.json();
    //     },
    //       err => { console.log(err) }
    //   );
  }

  itemSelected(item) {
console.log(JSON.stringify(item));
  }

}
