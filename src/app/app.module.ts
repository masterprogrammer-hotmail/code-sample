import { BrowserModule } from '@angular/platform-browser';
//import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';
import { IFPage } from '../pages/page-if/pif';
import { TestPage } from '../pages/page-test/ptest';
import { TabTemplatePage } from '../pages/tab-template/tab-template';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { ScheduleFilter2Page } from '../pages/schedule-filter2/schedule-filter2';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { ContentPage } from '../pages/content/content';

// import { Angulartics2Module } from 'angulartics2';
// import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
// import { GoogleAnalytics } from '@ionic-native/google-analytics';
//import { GoogleMaps } from '@ionic-native/google-maps'

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { ToastService } from '../providers/toast-service';
import { IABService } from '../providers/iab-service';
import { IFDataService } from '../providers/ifdata-service';
import { HttpClient } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module'

@NgModule({
  declarations: [
    ConferenceApp,
    IFPage,
    TestPage,
    TabTemplatePage,
    HelpPage,
    HomePage,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    ScheduleFilter2Page,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    ContentPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //Http,
    ComponentsModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: ScheduleFilter2Page, name: 'ScheduleFilter2', segment: 'scheduleFilter2' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        // { component: TemplatePage, name: 'TemplatePage', segment: 'template' },
        // { component: TabTemplatePage, name: 'TabTemplatePage', segment: 'ttemplate' },
        { component: HelpPage, name: 'HelpPage', segment: 'help' },
        // { component: CloudsPage, name: 'CloudsPage', segment: 'clouds' },
        // { component: ConfettiPage, name: 'ConfettiPage', segment: 'confetti' },
        // { component: SnowPage, name: 'SnowPage', segment: 'snow' },
        { component: IFPage, name: 'IFPage', segment: 'if' },
        { component: TestPage, name: 'TestPage', segment: 'test' }
      ]
    }),
    //Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    // CloudsPage,
    // ConfettiPage,
    // SnowPage,
    IFPage,
    TestPage,
    // TabTemplatePage,
    //TemplatePage,
    HelpPage,
    HomePage,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    ScheduleFilter2Page,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    ContentPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    ToastService,
    IABService,
    InAppBrowser,
    SplashScreen,
    SpinnerDialog,
    IFDataService,
    HttpClient,
    HTTP,
    //GoogleAnalytics
    //GoogleMaps,
    //{provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule { }