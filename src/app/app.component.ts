import { Component, ViewChild, OnInit } from '@angular/core';
//import { Router, NavigationEnd } from "@angular/router";
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { IFDataService } from '../providers/ifdata-service'
// import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SchedulePage } from '../pages/schedule/schedule';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { SupportPage } from '../pages/support/support';
import { TestPage } from '../pages/page-test/ptest';
import { IFPage } from '../pages/page-if/pif';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
// import { HttpResponse } from '@angular/common/http';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.template.html'
})
export class ConferenceApp implements OnInit {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    { title: 'Home', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'home' },          
    { title: 'New Providers', name: 'TabsPage', component: TabsPage, tabComponent: SpeakerListPage, index: 1, icon: 'cart' },
    { title: 'Client List', name: 'TabsPage', component: TabsPage, tabComponent: SchedulePage, index: 2, icon: 'calendar' },      
    { title: 'Provider List', name: 'TabsPage', component: TabsPage, tabComponent: MapPage, index: 3, icon: 'map' },
    { title: 'Events', name: 'TabsPage', component: TabsPage, tabComponent: AboutPage, index: 4, icon: 'pulse' },
    // { title: 'TabTemplate', name: 'TabsPage', component: TabsPage, tabComponent: TabTemplatePage, index: 5, icon: 'calendar' },
  ];
  signupPages: PageInterface[] = [
    { title: 'Signup', name: 'SignupPage', component: SignupPage, icon: 'person-add' }
  ];
  loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    { title: 'Logout', name: 'TabsPage', component: TabsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
  ];
  otherPages: PageInterface[] = [
    { title: 'Test', name: 'TestPage', component: TestPage, icon: 'person-add' }
  ];
  portalPages: PageInterface[] = [
    { title: 'I/F', name: 'IFPage', component: IFPage, icon: 'person-add' }
  ];
  rootPage: any;

  constructor(
    //public router: Router,
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public confData: ConferenceData,
    public storage: Storage,
    public splashScreen: SplashScreen,
    private ifdataSvc: IFDataService,
    // private ga: GoogleAnalytics,
  ) {

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     //ga.trackEvent()
    //     // ga('set', 'page', event.urlAfterRedirects);
    //     // ga('send', 'pageview');
    //     console.log("event.urlAfterRedirects");
    //   }
    // });
    
    // Check if the user has already seen the tutorial
    this.storage.get('hasSeenTutorial')
      .then((hasSeenTutorial) => {
        if (hasSeenTutorial) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = TutorialPage;
        }
        
      });

    // load the conference data
    confData.load();

    //TODO:
    this.enableMenus(false,false);
    this.userData.hasSignedUp().then((hasSignedUp) => {
      // this.enableMenus(hasSignedUp === true);
      this.userData.hasLoggedIn().then((hasLoggedIn) => {
          //this.enableMenu(hasLoggedIn === true);
          this.enableMenus(hasSignedUp, hasLoggedIn);
      });
    });

    // decide which menu items should be hidden by current login status stored in local storage
    // this.userData.hasLoggedIn().then((hasLoggedIn) => {
    //   this.enableMenu(hasLoggedIn === true);
    // });

    //this.enableMenu(true);

    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      
      // this.ga.startTrackerWithId('UA-111531778-1')
      //   .then(() => {
      //     console.log('Google analytics is ready now');
      //     //the component is ready and you can call any method here
      //     //this.ga.debugMode();
      //     this.ga.setAllowIDFACollection(true);
      //     this.ga.trackView('init');

      // //     this.ga.setUserId('0000000000');
      // //     //To set a specific app version:
      // //     this.ga.setAppVersion('1.33.7');
      //   })
      //  .catch(e => console.log('Error starting GoogleAnalytics', e));      
    
    }).catch((err) => {
      console.error('platform error');
      console.error(err);
    });

    this.listenToLoginEvents();
  }

  openPage(page: PageInterface) {
    let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Set the root of the nav with params if it's a tab index
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.userData.logout();
    }
  }

  openTutorial() {
    this.nav.setRoot(TutorialPage);
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenus(true, true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenus(false, false);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenus(true, false);
    });
  }

  enableMenus(signedUp: boolean, loggedIn: boolean) {
    //alert('in enable menus:' + 'signedUp=' + signedUp + ' loggedIn=' + loggedIn);
    if(signedUp){
      if(loggedIn){
        this.menu.enable(false, 'signUpMenu');
        this.menu.enable(true, 'loggedInMenu');
        this.menu.enable(false, 'loggedOutMenu');
      } else{
        this.menu.enable(false, 'signUpMenu');
        this.menu.enable(false, 'loggedInMenu');
        this.menu.enable(true, 'loggedOutMenu');
      }

    } else{
      this.menu.enable(true, 'signUpMenu');
      this.menu.enable(false, 'loggedInMenu');
      this.menu.enable(false, 'loggedOutMenu');
    }
  }

  // enableMenu(loggedIn: boolean) {
  //   this.menu.enable(loggedIn, 'loggedInMenu');
  //   this.menu.enable(!loggedIn, 'loggedOutMenu');
  // }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }

  ngOnInit() {
    // this.ifdataSvc.getConfig().subscribe(
    //   res => {
    //     // console.log(res.json());
    //     console.log(res.toString());
    //     console.log("CONFIG SUCCESS!");
        
    //   },
    //     err => { console.log("ERROR!"); console.log(err) }
    // );

    this.ifdataSvc.getProviders().subscribe(
      () => {
        //console.log(res.json());
        //alert("success");
        console.log("PROVIDER SUCCESS!");
        
      },
        err => { console.log("PROVIDER ERROR!"); console.log(err) }
    );


    // this.ifdataSvc.getProviders2().then(data => {
    //   console.log(data)
    //   // console.log(data.status);
    //   // console.log(data.data); // data received by server
    //   // console.log(data.headers);
    //   //this.userData.pushNewProviderData(data);
    // })
    // .catch(error => {
  
    //   console.log(error.status);
    //   console.log(error.error); // error message as string
    //   console.log(error.headers);
  
    // });


    this.ifdataSvc.getNewProviders().subscribe(
      () => {
        //console.log(res.json());
        //alert("success");
        console.log("NEWPROVIDER SUCCESS!");
        
      },
        err => { console.log("NEWPROVIDER ERROR!"); console.log(err) }
    );

  }
}
