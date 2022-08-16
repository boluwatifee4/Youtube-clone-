import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  darkMode : Boolean = true;
  backgroundColour : string = 'bg-black';
  textColour : string = 'text-white';
  public toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
