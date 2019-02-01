import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-hx-tabs';
  tabs: Array<Object>;

  constructor() {
    this.tabs = [
      {name: 'Tab 1'},
      {name: 'Tab 2'},
    ];
  }

  addTab(tab) {
    this.tabs.push(tab);
  }
}
