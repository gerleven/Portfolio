import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MatButtonModule} from '@angular/material/button';

//ng deploy --base-href=/Portfolio/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  title = 'Portfolio';

  itemsAppBar: MenuItem[] = [] as MenuItem[];
  itemsMenu: MenuItem[] = [] as MenuItem[];

  ngOnInit() {
    this.itemsAppBar = [
      {
        label: 'Menu',
        icon: 'pi pi-fw pi-bars',
      },
    ];

    this.itemsMenu = [
      {
        label: 'About me',
        escape: false,
        routerLink: ['/about-me'],
        items: [
          {
            label: 'About Me',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['/about-me/'],
          },
        ],
      },
      {
        label: 'CV / Resume',
        escape: false,
        routerLink: ['/cv'],
        items: [
          {
            label: 'CV online',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['cv/cv-online/'],
          },
          {
            label: 'Resume online',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['cv/resume-online/'],
          },
          
        ],
      },
      {
        label: 'My Angular Apps',
        escape: false,
        routerLink: ['/angular-apps'],
        items: [
          {
            label: 'Weather API',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['angular-apps/weather-api/'],
          },
          {
            label: 'LazyLoad Example App',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['angular-apps/lazyload-example-app/'],
          },
          {
            label: 'Poke API',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['angular-apps/poke-api/'],
          },
        ],
      },
      {
        label: 'My React Apps',
        escape: false,
        routerLink: ['/react-apps'],
        items: [
          {
            label: 'My Songs',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['react-apps/my-songs/'],
          },
          {
            label: 'Gym Routine',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['react-apps/gym-routine/'],
          },
          {
            label: 'Gym Route Generator',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['react-apps/gym-routine-generator/'],
          },
          {
            label: 'Dynamic Schedule',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['react-apps/dynamic-schedule/'],
          },
        ],
      },
    ] as MenuItem[];
  }
}
