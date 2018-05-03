import { Component } from '@angular/core';

import { App, NavController, ModalController, ViewController, PopoverController } from 'ionic-angular';
import { ScheduleFilter2Page } from '../schedule-filter2/schedule-filter2';

  //   <ion-list>
  //   <button ion-item (click)="close('http://ionicframework.com/docs/v2/getting-started')">Learn Ionic</button>
  //   <button ion-item (click)="close('http://ionicframework.com/docs/v2')">Documentation</button>
  //   <button ion-item (click)="close('http://showcase.ionicframework.com')">Showcase</button>
  //   <button ion-item (click)="close('https://github.com/ionic-team/ionic')">GitHub Repo</button>
  //   <button ion-item (click)="support()">Support</button>
  //<button ion-item (click)="support()">GV! Support</button>
  // </ion-list>
  
@Component({
  template: `
    <ion-list>
      <button ion-item (click)="help()">Help</button>
      <button ion-item (click)="presentModal($event)">About I/F</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(
    public popoverCtrl: PopoverController,
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController
  ) { }

  help() {
    this.app.getRootNav().push('HelpPage');
    this.viewCtrl.dismiss();
  }

  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }

  about() {
    //MWS-this needs to be a modal popover
    //this.app.getRootNav().push('AboutGVPage');
    this.viewCtrl.dismiss();
  }

  success() {
    this.app.getRootNav().push('MySuccessPage');
    this.viewCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(ScheduleFilter2Page);
    popover.present({ ev: event });
    
    popover.onWillDismiss((data: any[]) => {
      if (data) {
        //this.excludeTracks = data;
        //this.updateSchedule();
      }

      this.viewCtrl.dismiss();
    });

  }

  presentModal(event: Event) {
    event.type
    let modal = this.modalCtrl.create(ScheduleFilter2Page);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        //this.excludeTracks = data;
        //this.updateSchedule();
      }
    });

  }

}