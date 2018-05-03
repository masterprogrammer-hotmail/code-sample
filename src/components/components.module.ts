import { NgModule } from '@angular/core';
import { IFComponent } from './if/if.component';
//import { IFDataService } from './providers/ifdata-service';

// TODO: make sure nested providers still work with lazy-loading modules and the AOT
@NgModule({
	declarations: [IFComponent],
	imports: [],
	//providers: [IFDataService],
	exports: [IFComponent]
})
export class ComponentsModule {}
