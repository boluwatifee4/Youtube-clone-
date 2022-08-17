import { Component, OnInit } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // modes
  darkMode: Boolean = true;
  backgroundColour: string = 'bg-black';
  textColour: string = 'text-white';

  // icons
  Hamburger = faBars;
  search = faSearch;
  microphone = faMicrophone;
  bell = faBell;
  video = faVideo;
  user = faUserCircle;
  home = faHome;
  explore = faGlobe;
  shorts = faMeteor;
  watching = faTv;

  // categories arry
  categories = [
    {
      name: "All"
    },
    {
      name: "Music"
    },
    {
      name: "Contemporary Worship Music"
    },
    {
      name: "Mixes"
    },
    {
      name: "Gospel"
    },
    {
      name: "Christian"
    },
    {
      name: "Praise and Worship"
    },
    {
      name: "Christian Musi"
    },
    {
      name: "Baking"
    },
    {
      name: "Cooking"
    },
    {
      name: "Food"
    },
    {
      name: "Boxing<"
    },
    {
      name: "MMA"
    },
    {
      name: "Wrestling"
    },
    {
      name: "Sports"
    },
    {
      name: "Football"
    },
    {
      name: "Basketball"
    },
    {
      name: "Baseball"
    },
  ]

  public toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
