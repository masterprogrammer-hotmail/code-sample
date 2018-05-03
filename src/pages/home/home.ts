import { Component } from '@angular/core';
//import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../about-popover/about-popover';

//import { WindowsAzure } from ''
//declare function require(path: string) : any;
//import * as AzureMobileApps from 'azure-mobile-apps-client';
//import  { azure } from "azure-storage";
//import * as azure from "azure-storage";
//import * as tedious from "tedious";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  _loader: any;

  constructor(
    public popoverCtrl: PopoverController,
    //private ga: GoogleAnalytics
    // private config: Config
  ) { }

    ngAfterViewInit() {
    }

    presentPopover(event: Event) {
      let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({ ev: event });
    }

    

    
      
}
