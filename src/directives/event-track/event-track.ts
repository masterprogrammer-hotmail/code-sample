import { Directive,HostListener,Input } from '@angular/core';

/**
 * Generated class for the EventTrackDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[event-track]' // Attribute selector
})
export class EventTrackDirective {


  @Input('eventTracker') option:any;

  // @HostListener('click', ['$event']) onClick($event){
  @HostListener('click') onClick(){

    (<any>window).ga('send', 'event', this.option.category, this.option.action, {
      hitCallback: function() {
        console.log('Tracking is successful');
        
      }

    });
    
  }
  constructor() {
    console.log('Hello EventTrackDirective Directive');
  }

}