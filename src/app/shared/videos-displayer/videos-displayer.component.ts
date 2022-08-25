import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-videos-displayer',
  templateUrl: './videos-displayer.component.html',
  styleUrls: ['./videos-displayer.component.scss']
})
export class VideosDisplayerComponent implements OnInit {
 public _videoTitle!: string
 public _channelTitle!: string
 public _videoThumbnail!: any
  
  get videoTitle(): string{
    return this._videoTitle;
  }
  @Input()
  set videoTitle(videoTitle: string){
    this._videoTitle = videoTitle
  }
  get channelTitle(): string{
    return this._channelTitle;
  }
  @Input()
  set channelTitle(channelTitle: string){
    this._channelTitle = channelTitle
  }

  get videoThumbnail(): any{
    return this._videoThumbnail;
  }
  @Input()
  set videoThumbnail(videoThumbnail: any){
    this._videoThumbnail = videoThumbnail
  }
  @Output() clicker = new EventEmitter();

  onClick(){
    this.clicker.emit()
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this._videoThumbnail)
  }

}
