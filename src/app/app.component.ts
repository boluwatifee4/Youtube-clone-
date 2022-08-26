import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bimaYoutbe';

  constructor(  
    private titleService: Title,  
    private metaTagService: Meta  
  ) { }  

  ngOnInit() {  
    this.titleService.setTitle("Bima Angular Youtube Clone");  
    
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'Angular projects to do, Frontend developer, Youtube clone, Angular project samples, Youtube, Youtube Api, Ola Boluwatife' },  
      { name: 'robots', content: 'index, follow' },  
      { name: 'writer', content: 'Ola Boluwatife' },  
      { name: 'description', content: ' This is an Angular clone of Youtube It is a project to demonstrate my skills in Angular and Typescript. It is intended to do basic functions of the youtube app.'},
      { charset: 'UTF-8' }  
    ]);  
    
    
}  
}
