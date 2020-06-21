import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ApplicationModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CoreServiceModule } from './Services/core-service-module';
import { CommonUiModule } from './common/types/common-ui.module';
import { CommonFormsModule } from './common/forms/common-forms.module';
import { AppRoutingModule } from './app-routing.module';
import { NotificationBarModule } from './notification-bar/notification-bar.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SocialMediaComponent
  ],
  imports: [
    CoreServiceModule.forRoot(),
    CommonUiModule,
		CommonFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    NotificationBarModule,
    ApplicationModule,
    
    
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "el" },
    { provide: MAT_DATE_LOCALE, useValue: "el" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
