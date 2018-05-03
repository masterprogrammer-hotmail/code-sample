import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
//import { NgForm } from '@angular/forms';
//import { Storage } from '@ionic/storage';

export enum ToastPosition {
  Top = "top",
  Bottom = "bottom",
  Middle = "middle"
}

@Injectable()
export class ToastService {

  constructor(
    //public storage: Storage,
    //public form: NgForm
    private toastCtrl: ToastController
  ) {}


  presentToast(msg: string, duration?: number, position?: ToastPosition, dismiss?: boolean) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: (duration ? duration : 1500),
      position: (position ? position : ToastPosition.Bottom)
    });
  
    if(dismiss) {
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    }
  
    toast.present();
  }
}