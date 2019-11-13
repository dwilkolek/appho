import { Component, OnInit } from '@angular/core';
import { MenuOption } from 'src/app/model/menu-option.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  menu: MenuOption[] = [
    {
      name: 'Constructions',
      path: 'constructions',
      suboptions: [
        {
          path: 'rod-finder',
          name: 'Rod Finder'
        },
        {
          path: 'roof-pressure-coefficients',
          name: 'Roof Pressure Coefficients'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
