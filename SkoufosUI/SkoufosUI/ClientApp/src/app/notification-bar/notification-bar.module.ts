import { NgModule } from '@angular/core';
import { NotificationBarComponent } from './notification-bar.component';
import { CommonUiModule } from '../common/types/common-ui.module';

@NgModule({
	imports: [
		CommonUiModule,
	],
	declarations: [
		NotificationBarComponent,
	],
	exports: [NotificationBarComponent]
})
export class NotificationBarModule { }
