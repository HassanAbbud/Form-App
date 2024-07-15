import { Component } from '@angular/core';

interface MenuItem {
  title: string,
  path: string
}

@Component({
  selector: "shared-side-menu",
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[] = [
    {title: "Basics", path: "./reactive/basic"},
    {title: "Dynamics", path: "./reactive/dynamic"},
    {title: "Switches", path: "./reactive/switches"},
  ]

  public authMenu: MenuItem[] = [
    {title: "Register", path: "./auth"}
  ]
}
