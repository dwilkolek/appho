import { Component, OnInit, Input } from '@angular/core';
import { MenuOption } from 'src/app/model/menu-option.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  @Input()
  menu: MenuOption[] = [];

  constructor() { }

  ngOnInit() {
  }

}
