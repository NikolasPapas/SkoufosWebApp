import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { UiNotificationService } from './ui-notification.service';
import { HttpPostService } from './http-post.service';
import { MetaData } from './urlBuilder';

//
//
// This is shared module that provides all the services. Its imported only once on the AppModule.
//
//

@NgModule({
})
export class CoreServiceModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreServiceModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
		}
	}
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreServiceModule,
			providers: [
				UiNotificationService,
				HttpPostService,
				MetaData,
			],
		};
	}
}
