import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
import { CatrgorieserviceService } from 'src/app/core/services/categories/catrgorieservice.service';
import { SearchServiceService } from 'src/app/core/services/search/search-service.service';
import { BehaviorSubject } from 'rxjs';
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

  isUserSpeaking: boolean = false;
  voiceValue: string = "";
  speakingText: string = "";
  // categories arry
  categories = [
    {
      name: "All",
      value: "reviews | compilations"
    },
    {
      name: "Music",
      value: "Music"
    },
    {
      name: "Contemporary Worship Music",
      value: "Contemporary Worship Music"
    },
    {
      name: "Mixes",
      value: "Mixes"
    },
    {
      name: "Gospel",
      value: "Gospel"
    },
    {
      name: "Christian",
      value: "Christian"
    },
    {
      name: "Praise and Worship",
      value: "Praise and Worship"
    },
    {
      name: "Christian Musi",
      value: "Christian Musi"
    },
    {
      name: "Baking",
      value: "Baking"
    },
    {
      name: "Cooking",
      value: "Cooking"
    },
    {
      name: "Food",
      value: "Food"
    },
    {
      name: "Boxing",
      value: "Boxing"
    },
    {
      name: "MMA",
      value: "MMA"
    },
    {
      name: "Wrestling",
      value: "Wrestling"
    },
    {
      name: "Sports",
      value: "Sports"
    },
    {
      name: "Football",
      value: "Football"
    },
    {
      name: "Basketball",
      value: "Basketball"
    },
    {
      name: "Baseball",
      value: "Baseball"
    },
  ]

  public toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
  // get voiceSearchvalue
  // getVoiceSearchValue(){
  //   this.searchService.getcurrentEndresultsWithObservable().subscribe((value) => {
  //     console.log("valuenew",value);
  //     // this.voiceValue = value;
  //   });
  // }
  constructor(
    private categoryService: CatrgorieserviceService,
    private searchService: SearchServiceService
  ) { 
    // this.getVoiceSearchValue();
  }

  // send categories
  sendCategories(name: any) {
    this.categoryService.changeCategory(name);
  }
  // //send voiceSearchValue
  // sendVoiceSearchValue(value: any){
  //   this.searchService.changeEndresults(value);
  // }



  searchInputValue(searchInput: string){
    // console.log("search input value",searchInput);
    this.categoryService.changeCategory(searchInput);
    // reset search input
    // searchInput = "";
  }

  startRecording() {
    this.isUserSpeaking = true;
    this.searchService.start();
    this.voiceValue = "";
  
  }

  stopRecording() {
    this.isUserSpeaking = false;
    this.speakingText = "";
    this.searchService.stop().subscribe((value) => {
      // this.categoryService.changeCategory(value);
      // console.log("value",value);
      // this.voiceValue = value;
    });
      this.categoryService.changeCategory(this.voiceValue);


    // get voice value
  }

  initVoiceInput(){
    // Subscription for initializing and this will call when user stopped speaking.
    this.searchService.init().subscribe(() => {
     
    });
    // Subscription for getting the voice input value.
    this.searchService.speechInput().subscribe((input) => {
      this.voiceValue = input;
      this.speakingText = input;
      // console.log("voice value",this.voiceValue);
      // this.sendVoiceSearchValue(this.voiceValue);
      // this.searchInputValue(this.voiceValue);
     
    }
    );

  }
  ngOnInit(): void {
    this.initVoiceInput();
  }

}
