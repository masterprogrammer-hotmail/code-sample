import { Component, OnInit } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';
import { environment } from '../../environments/environment';

//import { ConferenceData } from '../../providers/conference-data';


@Component({
  selector: 'page-schedule-filter2',
  templateUrl: 'schedule-filter2.html'
})
export class ScheduleFilter2Page implements OnInit{
  //tracks: Array<{name: string, isChecked: boolean}> = [];
  public _ENVPROD: boolean;

  constructor(
    
    //public confData: ConferenceData,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    // passed in array of track names that should be excluded (unchecked)
    //let excludedTrackNames = this.navParams.data;

    //this.confData.getTracks().subscribe((trackNames: string[]) => {

      // trackNames.forEach(trackName => {
      //   this.tracks.push({
      //     name: trackName,
      //     isChecked: (excludedTrackNames.indexOf(trackName) === -1)
      //   });
      // });

    //});
  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }

  ngOnInit(){
    this._ENVPROD = environment.production
  }
}
