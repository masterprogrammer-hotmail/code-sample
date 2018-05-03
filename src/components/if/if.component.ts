import { Component } from '@angular/core';
// import { IFDataService } from '../../providers/ifdata-service'

/**
 * Generated class for the IfComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'if-component',
  templateUrl: 'if.component.html'
})
export class IFComponent {

  _text: string;

  constructor(
    // private ifdataSvc: IFDataService,
  ) {
    console.log('Hello IfComponent Component');
    this._text = 'Hello from the I/F custom Component';
  }

  doAzure(){
    console.log("IFComponent:doAzure");

    // this.ifdataSvc.getProviders().subscribe(
    //     res => {
    //       //console.log(res.json());
    //       console.log(res.text());
    //     },
    //       err => { console.log(err) }
    //   );
  }

}
