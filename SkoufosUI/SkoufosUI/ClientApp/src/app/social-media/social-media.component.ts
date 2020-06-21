import { Component, Input } from '@angular/core';
import { BaseComponent } from '../common/base/baseComponent';
import { SocialMedia } from './social-media.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls:['./social-media.component.scss']
})
export class SocialMediaComponent extends BaseComponent {
    @Input() facebook:SocialMedia;
    @Input() instagram:SocialMedia;
    @Input() gmail:SocialMedia;
    @Input() map:SocialMedia;
    @Input() vertical:boolean = true;
  
    facebookLink:string = "https://www.facebook.com/";
    instagramLink:string = "https://www.instagram.com/";
    gmailLink:string = "https://www.gmail.com/";
    mapLink:string = "https://www.googleMaps.com/";

    constructor(){
      super();
    }


}
