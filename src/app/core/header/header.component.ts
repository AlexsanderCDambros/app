import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  focusOnMainContent(): void {
    const mainTag = document.getElementsByTagName('main')[0];
    
    if(mainTag) {
      mainTag.setAttribute('tabindex','0');
      mainTag.focus();
      setTimeout(() => {
        mainTag.removeAttribute('tabindex');
      }, 100);
    }
  }
}
