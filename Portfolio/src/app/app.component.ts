import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
    //  about-me
    //  /cv-resume
    //
    //  art-section
    //  /
    //
    //  my-apps
    //  /my-songs
    //  /poke-api
    //  /gym-routine
    //  /gym-routine-generator
    //  /dynamic-schedule

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
          {
            label: 'CV Resume',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['/about-me/cv-resume'],
          }
        ],
      },
      {
        label: 'My Apps',
        escape: false,
        routerLink: ['/my-apps'],
        items: [
          {
            label: 'My Songs',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['my-apps/my-songs/'],
          },
          {
            label: 'Poke API',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['my-apps/poke-api/'],
          },
          {
            label: 'Gym Routine',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['my-apps/gym-routine/'],
          },
          {
            label: 'Gym Route Generator',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['my-apps/gym-routine-generator/'],
          },
          {
            label: 'Dynamic Schedule',
            icon: 'pi pi-fw pi-circle',
            routerLink: ['my-apps/dynamic-schedule/'],
          },
        ],
      },
    ] as MenuItem[];
  }
}
