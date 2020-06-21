import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Greek } from './common/language/gr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {
  title = 'Skoufos';
  TabList:string[]=["Home","Counter","Fetch Data"];
  selectedTabIndex:string="Home";
  constructor(
    private translate: TranslateService,
  ) {

  }

  ngOnInit() {
    // Language Configuration
    this.translate.setDefaultLang('gr');
    this.translate.use('gr');
    this.translate.setTranslation('gr', Greek);
    //this.configurationService.init();
  }

  selectedTab(tabName:string){
    this.selectedTabIndex = tabName
  }

}
