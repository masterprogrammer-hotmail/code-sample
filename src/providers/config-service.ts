import { HttpClient } from '@angular/common/http';
//import { HttpResponse } from '@angular/common/http';
// import { HTTP } from '@ionic-native/http';

// MWS| TODO: This needs to be replaced everywhere
//import { Http } from '@angular/http';


import { Injectable, OnInit } from '@angular/core';
import { UserData } from '../providers/user-data';
//import { UserOptions } from '../interfaces/user-options';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

//TODO: 
export interface Data {
  
}

/*
  Generated class for the ConfigService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigService implements OnInit{

  private configUrl = 'assets/config.json';
  private dataUrl = 'assets/data/data.json';

  //private azureBase = '';
  //private providerUrl = '/api/providers';
  
 _config: any;

  constructor(
    public http: HttpClient,
    // public http: Http,
    // public http2: HTTP,
    public userData: UserData,
  ) {
    console.log('Hello ConfigService Provider');
  }

ngOnInit() {
  console.log('ngOnInit');
  this.getConfig();
}

  getConfig() {
    console.log('getConfig');

    //var res = this.http.get("assets/config.json");
    // var res = this.http.get(this.configUrl);
    var res = this.http.get<Config>(this.configUrl);

    res.subscribe(
      res => {
        //console.log(res.json());
        console.log(res);
        console.log("config-service::CONFIG SUCCESS!");
        
        this._config = res;
      },
        err => { console.log("config-service::CONFIG ERROR!"); console.log(err) }
    );
    
    //TODO: refactor this when it is injected
    return res;
  }

  getData() {
    console.log('getData');
    //return this.http.get<Config>(this.configUrl);
    // return this.http.get<Config>("assets/data/data.json");

    var res = this.http.get<Data>(this.dataUrl);

    res.subscribe(
      res => {
        //console.log(res.json());
        console.log("config-service::CONFIG2 SUCCESS!");
        console.log(res);
      },
        err => { console.log("config-service::CONFIG2 ERROR!"); console.log(err) }
    );

    return res;
  }

  



  

}
