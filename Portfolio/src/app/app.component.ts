import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  title = 'Portfolio';

  items: MenuItem[] = [] as MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Menu',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'About Me',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'CV Resume',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'My Apps',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      
    ] as MenuItem[];
  }
}
