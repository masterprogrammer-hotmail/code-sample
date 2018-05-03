import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { PopoverController } from 'ionic-angular';

//import { SpinnerDialog } from '@ionic-native/spinner-dialog';

// import { PopoverPage } from '../about-popover/about-popover';

import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-tab-template',
  templateUrl: 'tab-template.html'
})
export class TabTemplatePage {
  submitted = false;
  constructor(
    public inAppBrowser: InAppBrowser,
    public inAppBrowserEvent: InAppBrowser,
    //private spinnerDialog: SpinnerDialog
  ) { }

  // presentPopover(event: Event) {
  //   let popover = this.popoverCtrl.create(PopoverPage);
  //   popover.present({ ev: event });
  // }

  doiabOpen_old(url: string) {
    var options = "_blank";
    var iab = window.open(url, options, "location=no,hidden=no");
    //iab = window.open('pages/test/test.html','_blank', "location=no,hidden=yes");
    //var cdv = cordova.inAppBrowser.open();

    iab.addEventListener("exit", function() {
      //console.log('exit');
    });
      
    iab.addEventListener("loadstop", function() {
      //console.log('loadstop');
      
      //localStorage.setItem("login", "{login:'mstutts'}");
      //var j = localStorage.getItem("login");
      //alert($scope.$eval('JSON.parse(localStorage.getItem("login"))'));

      // var callback = function(data) { console.log("iab3.executeScript"); console.log(data); };
      // var script =  "$timeout(function(){ javascript: alert('hi'); }, 3000)";
      // iab3.executeScript({ code: script}, callback);
    });

    //iab.insertCSS({ code: ".test{ color:red; }" }, function(data){ console.log("iab3.insertCSS"); });

  }//--> doiabOpen_old()

  doiabOpen_1(url: string) {
    // this.inAppBrowser.create(
    //   `https://twitter.com/${speaker.twitter}`,
    //   '_blank'
    // );
    //console.log('PInfoPage::doiabOpen');
    this.inAppBrowser.create(
      url,
      '_blank',
      'location=no,enableViewportScale=yes'
    );
    
    //browser.insertCSS(...);
    // browser.close();
    //browser.executeScript({ code: 'alert("hi");' })
    //browser.on("loadstop").subscribe()
    
    //   browser.on('loadstart').subscribe(type => {
    //     //this.close_status=true;
    //     console.log(type.type);
    //     console.log(type.url);
    // });

    //   browser.on("loaderror").subscribe(type => {
    //     console.log(type.message);
    //     console.log(type.code);
    //   });

    //   browser.on("exit").subscribe(type => {
    //     //this.close_status=true;
    //     console.log(type.type);
    //     console.log(type.url);
    // });

  }//--> doiabOpen()

  doOpen(url: string) {

    window.open(url, "_blank");
      
  }

  doiabOpen3(url: string) {
    // this.inAppBrowser.create(
    //   `https://twitter.com/${speaker.twitter}`,
    //   '_blank'
    // );

    this.inAppBrowser.create(
      url,
      '_blank',
      'location=no,enableViewportScale=yes'
    );
      
  }

  doiabOpenOrder(url: string) {
    // this.inAppBrowser.create(
    //   `https://twitter.com/${speaker.twitter}`,
    //   '_blank'
    // );

    //console.log('PInfoPage::doiabOpen');
    var browser = this.inAppBrowser.create(
      url,
      '_blank',
      'location=no,enableViewportScale=yes'
    );
    //browser.insertCSS(...);
    // browser.close();
    //browser.executeScript({ code: 'alert("hi");' })
    //browser.on("loadstop").subscribe()

    browser.on("loadstop").subscribe(() => {
      //this.close_status=true;
      //console.log(type.type);
      //console.log(type.url);

      browser.executeScript( {code:'javascript:join();'}).then(onSuccess,onFail)
      //browser.insertCSS({ code: ".test{ color:red; }" }).then( function(){ console.log("iab3.insertCSS")}, function(){ console.log("iab3.insertCSS")} );
    
      function onSuccess(){
        //console.log('executeScript SUCCESS!!');
      }
      function onFail(){
        //console.log('executeScript FAIL!!');
      }
    });

    browser.on('loadstart').subscribe((ev: InAppBrowserEvent) => {
      //this.close_status=true;
      ev.type
    });

    //Events: loadstart, loadstop, loaderror, exit
    browser.on('exit').subscribe(() => {
      //Do whatever here
    });

    // browser.on("loadstop").toPromise().then(function(){
    //   //this.close_status=true;
    //   // console.log(type.type);
    //   // console.log(type.url);

    //   browser.executeScript( {code:'javascript:join();'}).then(this.onSuccess,this.onFail)
    //   //browser.insertCSS({ code: ".test{ color:red; }" }).then( function(){ console.log("iab3.insertCSS")}, function(){ console.log("iab3.insertCSS")} );
    // }),
    // function(){
      
    // };
      
  }//--> doiabOpenOrder()

  doiabOpenTest(url: string) {
    //console.log('PInfoPage::doiabOpen');
    this.inAppBrowser.create(
      url,
      '_blank',
      'location=no,enableViewportScale=no'
    );

    // browser.on("loadstop").subscribe(() => {
    //   //this.close_status=true;
    //   //console.log(type.type);
    //   //console.log(type.url);

    //   //browser.executeScript( {code:'javascript:join();'}).then(onSuccess,onFail)
    //   browser.insertCSS({ code: ".test{ color:red; }" }).then( onSuccess, onFail );
    
    //   function onSuccess(){
    //     console.log('SUCCESS!!');
    //   }
    //   function onFail(){
    //     console.log('FAIL!!');
    //   }
    // });

    //browser.insertCSS({ code: ".test { color:red; }" });

    //browser.insertCSS({ code: ".test { color:red; }" }).then( onSuccess, onFail );

    // browser.on('loadstop').subscribe(function() {
    //   console.log("subscribed");
    //   //browser.show();
    //   browser.insertCSS({ code: ".test{ color:red; }" }).then( onSuccess, onFail );
    //   //browser.executeScript( {code:'javascript:join();'}).then(onSuccess,onFail);
      // function onSuccess(){
      //       console.log('SUCCESS!!');
      //     }
      //     function onFail(){
      //       console.log('FAIL!!');
      //     }
    // });

  //   browser.on('loadstart').subscribe((e)=>{
  //     console.log(e.url);
  //     //this.spinnerDialog.show('Carregando');
  // });
  // browser.on('loadstop').subscribe((e)=>{
  //   console.log(e.url);
  //   //this.spinnerDialog.hide();
  //     // browser.insertCSS({
  //     //   file: 'assets/portalstyles.css'
  //     // }).then((e)=>{ console.log(e.url); }).catch((e)=>{ console.log('Error in CSS. '+ e); });
  // });

// browser.on("loadstop").subscribe((e)=>{
// console.log(e.type)
// console.log(e.url)
// });
  
    

  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.signup(this.signup.username);
      //this.navCtrl.push(TabsPage);
    }
  }

}
