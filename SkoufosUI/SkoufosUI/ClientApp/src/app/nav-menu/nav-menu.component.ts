import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isExpanded = false;
  bgSrc="./../../assets/images/skoufosLogo.png"
  @Input() title:string;
  @Input() TabList:string[]=[];
  @Output() selectedTab :EventEmitter<string> = new EventEmitter<string>();

  collapse() {
    this.isExpanded = false;
  }

  selectTab(tabName:string){
    this.selectedTab.emit(tabName);
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
