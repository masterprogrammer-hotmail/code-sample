import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

//import { TabTemplatePage } from '../tab-template/tab-template';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = HomePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = SchedulePage;
  tab4Root: any = MapPage;
  tab5Root: any = AboutPage;
  //tab6Root: any = TabTemplatePage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
