import { AlertController, LoadingController, ModalController, PopoverController, ViewController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { ContentPage } from '../pages/content/content';
//import { NgForm } from '@angular/forms';
//import { Storage } from '@ionic/storage';


@Injectable()
export class DLGService {
  
private _loader: any;

public _testRadioOpen: boolean;
public _testRadioResult: any;
public _testCheckboxOpen: boolean;
public _testCheckboxResult: any;

  constructor(
    //public storage: Storage,
    //public form: NgForm
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private viewCtrl: ViewController
  ) {}

  showAlert(title: string, subTitle: string) {
    
    let alert = this.alertCtrl.create({
      title: title ? title : 'Title',
      subTitle: subTitle ? subTitle : 'Sub-Title',
      buttons: ['OK']
    });
    alert.present();
  }

showPrompt(title: string, message: string, inputs?: any, buttons?: any) {

    let prompt = this.alertCtrl.create({
        title: title ? title : 'Title',
        message: message ? message : 'Message',
        inputs: inputs ? inputs : [
        {
            name: 'title',
            placeholder: 'Title'
        },
        ],
        buttons: buttons ? buttons : [
        {
            text: 'Cancel',
            handler: data => {
            console.log('Cancel clicked');
            console.log(data);
            }
        },
        {
            text: 'Save',
            handler: data => {
            console.log('Saved clicked');
            console.log(data);
            }
        }
        ]
    });
    prompt.present();
}

showConfirm(title: string, message: string, buttons?: any) {

    let confirm = this.alertCtrl.create({
      title: title ? title : 'Title',
      message: message ? message : 'Message',
      buttons: buttons ? buttons : [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  showRadio(title: string, label: string, value: string, checked: boolean) {

    let alert = this.alertCtrl.create();
    alert.setTitle(title ? title : 'Title');

    alert.addInput({
      type: 'radio',
      label: label ? label : 'Blue',
      value: value ? value : 'blue',
      checked: checked ? checked : false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this._testRadioOpen = false;
        this._testRadioResult = data;
      }
    });
    alert.present();
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this._testCheckboxOpen = false;
        this._testCheckboxResult = data;
      }
    });
    alert.present();
  }

  presentLoading(content: string, duration?: number) {
    this._loader = this.loadingCtrl.create({
      content: content ? content : "Getting data from Azure cloud...",
      duration: duration ? duration : 0
    });
   this._loader.present();
  }

  hideLoading() {
    this._loader.dismiss();
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(ContentPage);
    popover.present({ ev: event });
    
    popover.onWillDismiss((data: any[]) => {
      if (data) {
        //this.excludeTracks = data;
        //this.updateSchedule();
      }

      this.viewCtrl.dismiss();
    });

  }

  presentModal() {
    let modal = this.modalCtrl.create(ContentPage);
    modal.present();
  }

  presentModalEv(event: Event) {
    event.type
    let modal = this.modalCtrl.create(ContentPage);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        //this.excludeTracks = data;
        //this.updateSchedule();
      }
    });

  }

}