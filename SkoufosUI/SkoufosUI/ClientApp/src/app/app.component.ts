import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Greek } from './common/language/gr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'SkoufosUI';

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

}
