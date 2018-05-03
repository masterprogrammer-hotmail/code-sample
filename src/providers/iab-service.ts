import { Injectable } from '@angular/core';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';


@Injectable()
export class IABService {

  constructor(
    private _iab: InAppBrowser,
    private _platform: Platform,
  ) {}

  doiabOpen(url: string) {
    return this._iab.create(
      url,
      '_blank',
      'location=no,enableViewportScale=yes'
    );
  }//--> doiabOpen

  doiabOpenEnroll(url: string) {
    
    //select based on platform
    if(this._platform.is('mobile')) {
      
      //MWS-I am using var here to increase the scope of browser
      var bwsr = this._iab.create(
        url,
        '_blank', //_self _system _blank
        'location=yes,enableViewportScale=yes,hidden=yes,clearcache=yes,clearsessioncache=yes'
      );//Events: loadstart, loadstop, loaderror, exit

      bwsr.on('loaderror').subscribe(
        (ev: InAppBrowserEvent) => {
          console.log("loaderror:next", ev); 
        },  //NEXT
        (err: any) => {
          console.log("loaderror:error", err);
        }, //ERROR
        () => {
          console.log("loaderror:complete");
          //this.spinner.hide();
          bwsr.hide();
        }  //COMPLETE
      );

      bwsr.on('exit').subscribe(() => {
        console.log("exit: IAB closed")
      });

      bwsr.on("loadstop").subscribe(
        (ev: InAppBrowserEvent) => {
          console.log("loadstop", ev.url);

          //browser.insertCSS({ code: ".test{ color:red; }" }).then(onSuccess,onFail)
        
          //function onSuccess(){
            // console.log('insertCSS SUCCESS!!');
            
          // }
          // function onFail(){
          //   console.log('insertCSS FAIL!!');
          // }
          
          function onSuccess2(){
            console.log('executeScript SUCCESS!!');
            bwsr.show();
          }
          function onFail2(){
            console.log('executeScript FAIL!!');
            bwsr.hide();
          }
          bwsr.executeScript( {code:'join();'}).then(onSuccess2,onFail2);

          //this.spinner.hide();
          //this.browser.show();
        },  //NEXT
          (err: any) => {
            console.log("loadstop:error", err);
            
            bwsr.hide();
        }, //ERROR
          () => {
            console.log("loadstop:complete");
        }  //COMPLETE
      );

      bwsr.on('loadstart').subscribe(
        (ev: InAppBrowserEvent) => {
          console.log("loadstart:ev.type", ev.type);
          console.log("loadstart:ev.url", ev.url);
          console.log("loadstart:ev.message", ev.message);

          // this.browser.hide();
          //this.spinner.show("", "loading content.. please wait.");
          
        },  //NEXT
        (err: any) => {
          console.log("loadstart:error", err);
          //this.spinner.hide();
          bwsr.hide();
        }, //ERROR
        () => {
          console.log("loadstart:complete");
        }  //COMPLETE
      );

      return bwsr;

    } else { //this.platform.is('mobile'))
      return false;
    }
  }//--> doiabOpenEnroll()

  doiabOpen_old(url: string) {
    var options = "_blank";
    var iab = window.open(url, options, "location=no,hidden=no");
    //iab = window.open('pages/test/test.html','_blank', "location=no,hidden=yes");

    iab.addEventListener("exit", function() {
      console.log('exit');
    });
      
    iab.addEventListener("loadstop", function() {
      console.log('loadstop');
      //localStorage.setItem("login", "{login:'mstutts'}");
      //var j = localStorage.getItem("login");
      //alert($scope.$eval('JSON.parse(localStorage.getItem("login"))'));
    });

    //iab.insertCSS({ code: ".test{ color:red; }" }, function(data){ console.log("iab3.insertCSS"); });

  }//--> doiabOpen_old()

  doiabOpen_1(url: string) {
    console.log('PInfoPage::doiabOpen_1');
    let browser = this._iab.create(
      url,
      '_blank',
      'location=no,enableViewportScale=yes'
    );
    
    //browser.insertCSS(...);
    // browser.close();
    //browser.executeScript({ code: 'alert("hi");' })

    browser.on("loadstop").subscribe(type => {
      console.log(type.type);
      console.log(type.url);
    });

      browser.on('loadstart').subscribe(type => {
        //this.close_status=true;
        console.log(type.type);
        console.log(type.url);
    });

      browser.on("loaderror").subscribe(type => {
        console.log(type.message);
        console.log(type.code);
      });

      browser.on("exit").subscribe(type => {
        //this.close_status=true;
        console.log(type.type);
        console.log(type.url);
    });

  }//--> doiabOpen_1()

  doiabOpen3(url: string) {
    this._iab.create(
      url,
      '_blank',
      'location=no,enableViewportScale=yes'
    );
  }//--> doiabOpen3()

  doiabOpenOrder(url: string) {
    console.log('PInfoPage::doiabOpenOrder');
    var browser = this._iab.create(
      url,
      '_blank',
      'enableViewportScale=yes,hidden=yes,location=yes'
    );
    //browser.insertCSS(...);
    // browser.close();
    //browser.executeScript({ code: 'alert("hi");' })
    //browser.on("loadstop").subscribe()

    browser.on("loadstop").subscribe((ev: InAppBrowserEvent) => {
      //this.close_status=true;
      //console.log(type.type);
      console.log("content loaded");
      console.log("loadstop", ev.url);

      var script =  "$timeout(function(){ javascript: alert('hi'); }, 3000)";
      browser.executeScript({ code: script }).then(
          value => { console.log(value) },
          reason => { console.log(reason) }
      )
      browser.show();
    });

    // browser.on('loadstart').subscribe((ev: InAppBrowserEvent) => {
    //   //this.close_status=true;
    //   console.log("loading content", ev.url)
    // });

    // browser.on('loaderror').subscribe(() => {

    // });

    // browser.on('exit').subscribe(() => {
    //   console.log("IAB closed")
    // });

    
      
  }//--> doiabOpenOrder()

  doiabOpenTest(url: string) {
    console.log('PInfoPage::doiabOpenJoinTest');
    var browser = this._iab.create(
      url,
      '_blank',
      'location=no,enableViewportScale=yes,hidden=yes'
    );

    browser.on("loadstop").subscribe(() => {
      //this.close_status=true;
      //console.log(type.type);
      //console.log(type.url);
      browser.show()
    //   this.spinnerDialog.hide();

      browser.insertCSS({ code: ".test{ color:red; }" }).then(onSuccess,onFail)
    
      function onSuccess(){
        console.log('insertCSS SUCCESS!!');
        browser.executeScript( {code:'javascript:join();'}).then(onSuccess2,onFail2)
      }
      function onFail(){
        console.log('insertCSS FAIL!!');
      }
      function onSuccess2(){
        console.log('executeScript SUCCESS!!');
      }
      function onFail2(){
        console.log('executeScript FAIL!!');
      }
    });

    browser.on('loadstart').subscribe((ev: InAppBrowserEvent) => {
      //this.close_status=true;
      console.log("content loaded", ev.url)
    //   this.spinnerDialog.show();
    });

    //Events: loadstart, loadstop, loaderror, exit
    browser.on('exit').subscribe(() => {
      console.log("IAB closed")
    });


  }

  doiabOpenSpinTest(url: string) {
    // this.inAppBrowser.create(
    //   `https://twitter.com/${speaker.twitter}`,
    //   '_blank'
    // );

    console.log('PInfoPage::doiabOpenSpinTest');
    var browser = this._iab.create(
      url,
      '_blank',
      'location=no,enableViewportScale=yes,hidden=yes'
    );

    browser.on("loadstop").subscribe(() => {
      //this.close_status=true;
      //console.log(type.type);
      //console.log(type.url);
      console.log("loading content")
      browser.show()
      //this.spinnerDialog.hide();

      
    });

    browser.on('loadstart').subscribe(() => {
      //this.close_status=true;
      console.log("content loaded")
      //this.spinnerDialog.show("", "loading content.. please wait.");
    });

    //Events: loadstart, loadstop, loaderror, exit
    browser.on('exit').subscribe(() => {
      console.log("IAB closed")
    });


  }
}