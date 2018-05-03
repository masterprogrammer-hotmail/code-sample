import { Injectable } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserOptions } from '../interfaces/user-options';

@Injectable()
export class UserData {

  data: UserOptions = { username:'', password: '', fname: '', lname: '', email: '', phone: '' };
  
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  HAS_SIGNED_UP = 'hasSignedUp';
  _configData: any;
  _providerData: any;
  _newProviderData: any;

  constructor(
    public events: Events,
    public storage: Storage
    //public form: NgForm
  ) {}

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  login(username: string, password: string): void {
    console.log('user logged in:', username, password)
    this.doLogin(username)
  };

  secureIFLogin(username: string, password: string): boolean {
    console.log('user logged in:', username, password);

    var x = this._providerData.find(x => x.PEMail == username);
    if(x){
      if(x.Password == password) {
      this.doLogin(username);
        return true;
      }
      return false;
    }
    //var x: boolean = true;
  //   if(x){
  //     this.doLogin(username);
  //     return true;
  //   }
  //   return false;
  }

  secureLogin(username: string, password: string): Promise<boolean> {
    console.log('user logged in:', username, password)
    
    return this.doUserOptionData().then((value) => {
      console.log(value)
      //TODO: compare the data and eithe accept or reject the login
      if(value){
        if(username == this.data.username && password == this.data.password){
          console.log('login success')
          this.doLogin(username);
          return true
        } else {
          console.log('login failed')
          // alert("login failed");
          return false;
        }
      } else {
        console.log('login failed')
        // alert("login failed");
        return false;
      }
    })
    // return true
  };

  doLogin(username: string) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  }

  doUserOptionData(): Promise<boolean> {
    return this.getUserOptionData().then((value) => { 
      //debugger;
      console.log("in secure login");
      console.log(value)
      //var data = JSON.parse(value)
      var dat = eval(value)
      //this.data = eval("{" + value + "}");
      this.data = Object.assign({}, dat)
      console.log(this.data)
      return true
    })
  }

  // login2(username: string, password: string): void {
  //   console.log('user logged in:', username, password)
    
  //   this.getUserOptionData().then((value) => { 
  //     debugger;
  //     console.log(value)
  //     var data = JSON.parse(value)
  //     this.data = data;
  //     //TODO: compare the data and eithe accept or reject the login
  //     if(username == data.username && password == data.password){
  //       this.doLogin(username)
  //       return true;
  //     } else {
  //       // alert user
           //
  //       return false;
  //     }

      
  //   })
    
    
  // };

  //signup(username: string, form: NgForm, data: any): void {
  signup(username: string): void {
    this.storage.set(this.HAS_SIGNED_UP, true);
    this.storage.set(this.HAS_LOGGED_IN, false);
    this.setUsername(username);
    // alert(form);
    // alert(data);
    //this.setUserOptionData(form.username, form.password, form.fname, form.lname, form.email , form.phone);
    this.events.publish('user:login');
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUserOptionData(username: string, password: string, fname: string, lname: string, email: string, phone: string): void {
    var UserOptions = { username: username, password: password, fname: fname, lname: lname, email: email, phone: phone };
    this.storage.set('useroptions', UserOptions);
    console.log("useroption data stored")
  };

  getUserOptionData(): Promise<string> {
    return this.storage.get('useroptions').then((value) => {
      return value;
    });
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
    console.log("username data stored");
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  };

  hasSignedUp(): Promise<boolean> {
    return this.storage.get(this.HAS_SIGNED_UP).then((value) => {
      return value === true;
    });
  };

  pushProviderData(data: any) {
    //console.log("provider data" + data);
    this._providerData = data;
  }

  pushNewProviderData(data: any) {
    //console.log("provider data pushed" + data);
    this._newProviderData = data;
  }

  pushConfigData(data: any) {
    //console.log("config data pushed" + data);
    this._configData = data;
  }

}