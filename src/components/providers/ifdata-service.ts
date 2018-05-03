////import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
//import { HTTP } from '@ionic-native/http';
import { Injectable, OnInit } from '@angular/core';

import { UserData } from '../../providers/user-data';
//import { HttpResponse } from '@angular/common/http';
//import { UserOptions } from '../interfaces/user-options';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

/*
  Generated class for the IfDataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IFDataService implements OnInit {

  //private configUrl = 'assets/config.json';

  //private azureBase = 'https://injuryfinance.azurewebsites.net';
  //private providerUrl = '/api/providers';
  //private newProviderUrl = '/api/newproviders';

  constructor(
    //public http: HttpClient
    public http: Http,
    //public http2: HTTP,
    public userData: UserData,
  ) {
    console.log('Hello IfDataService Provider');
  }

  ngOnInit() {
    this.getConfig();
  }

  getConfig() {
    //return this.http.get<Config>(this.configUrl);
    // return this.http.get<Config>("assets/config.json");

    var res = this.http.get("assets/config.json");

    res.subscribe(
      res => {
        //console.log(res.json());
        //alert("success");
        console.log("ifdata-service::CONFIG SUCCESS!");
        this.userData.pushConfigData(res.text());
      },
        err => { console.log("ifdata-service::CONFIG ERROR!"); console.log(err) }
    );

    return res;
  }

  // getConfig2() {
  //   //return this.http.get<Config>(this.configUrl);
  //   // return this.http.get<Config>("assets/config.json");

  //   //var res = this.http.get("assets/config.json").then()
  //   return this.http2.get('assets/config.json', {}, {}).then(data => {
  //     console.log(data.status);
  //     console.log(data.data); // data received by server
  //     console.log(data.headers);
  //     this.userData.pushConfigData(data.data);
  //   })
  //   .catch(error => {
  //     console.log(error.status);
  //     console.log(error.error); // error message as string
  //     console.log(error.headers);
  //   });
    

  // }


//   getProviders2() {
//     var res = this.http2.get("https://injuryfinance.azurewebsites.net/api/providers", {}, {}).then(data => {

//       console.log(data.status);
//       console.log(data.data); // data received by server
//       console.log(data.headers);
//       this.userData.pushProviderData(data.data);
//     })
//     .catch(error => {
  
//       console.log(error.status);
//       console.log(error.error); // error message as string
//       console.log(error.headers);
  
//     });

// return res;
//     }




  getProviders() {
    var res = this.http.get("https://injuryfinance.azurewebsites.net/api/providers");
    res.subscribe(
      res => {
        //console.log(res.json());
        //alert("success");
        console.log("ifdata-service::PROVIDER SUCCESS!");
        this.userData.pushProviderData(res.text());
      },
        err => { console.log("ifdata-service::PROVIDER ERROR!"); console.log(err) }
    );

    return res;
    }
    



    // getNewProviders2() {
    //   return this.http2.get("https://injuryfinance.azurewebsites.net/api/newproviders", {}, {}).then(data => {

    //     console.log(data.status);
    //     console.log(data.data); // data received by server
    //     console.log(data.headers);
    //     this.userData.pushNewProviderData(data.data);
    //   })
    //   .catch(error => {
    
    //     console.log(error.status);
    //     console.log(error.error); // error message as string
    //     console.log(error.headers);
    
    //   });
      


    //   }



  getNewProviders() {
    var res = this.http.get("https://injuryfinance.azurewebsites.net/api/newproviders");
    res.subscribe(
      res => {
        //console.log(res.json());
        //alert("success");
        console.log("ifdata-service::NEWPROVIDER SUCCESS!");
        this.userData.pushNewProviderData(res.text());
      },
        err => { console.log("ifdata-service:: NEWPROVIDER ERROR!"); console.log(err) }
    );

    return res;
    }

}
