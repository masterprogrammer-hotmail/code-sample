import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

// import { UserData } from '../../providers/user-data';

// import { UserOptions } from '../../interfaces/user-options';

//import { TabsPage } from '../tabs-page/tabs-page';


@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {
  submitted = false;

  constructor(public navCtrl: NavController) {}

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.signup(this.signup.username);
      //this.navCtrl.push(TabsPage);
    }
  }
}
