import { Component } from '@angular/core';
import { MenuOption } from './model/menu-option.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'APPHO';
  menu: MenuOption[] = [
    {
      name: 'Constructions',
      path: 'constructions',
      suboptions: [
        {
          path: 'rod-finder',
          name: 'Rod Finder'
        }
      ]
    }
  ];
}
