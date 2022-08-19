import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Endpoints } from 'src/app/core/coreUtils/endpoints';
import { VideosServiceService } from 'src/app/core/services/videos/videos-service.service';
import { VideoModel } from 'src/app/shared/models/video.model';
import { DomSanitizer } from '@angular/platform-browser';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.scss']
})
export class WatchVideoComponent implements OnInit {


  // icons
  likes = faThumbsUp as IconProp;
  dislikes = faThumbsDown as IconProp;
  comments = faComment as IconProp;
  views = faEye as IconProp;
  iD: string = "";
  videos: any = [];
  iframe: any = "";
  urlRegex =/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
  url!: string ;
  // myTrustedUrl!: any;
  constructor(
    private videosService: VideosServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.route.params.subscribe(params => this.iD = params['id']);
    this.videoInterface = {
      id: this.iD,
      part: 'snippet,contentDetails,statistics,player'
    }
  //  if(this.url !== undefined) {
  //    this.myTrustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  //  }
   
    // getSingleVideo();
    // this.videos = video

   }


   
   

   videoInterface: VideoModel = {
    id: this.iD,
    part: 'snippet,contentDetails,statistics,player'
  }
  ngAfterViewInit() {
    console.log("video",this.iD);

    this.videosService.getSingleVideo(this.videoInterface).subscribe({
      next: (data: any) => {
        this.videos = data?.items;
        console.log("single video",this.videos);
        // get iframe
        this.iframe = this.videos[0].player.embedHtml
        // console.log("iframe",this.videos[0].player.embedHtml);
        this.url = "//" + this.iframe.match(this.urlRegex);
        // add dounle quotes to url
        this.url = this.url.replace("//", '"//');
        // unstringify url
        this.url = this.url.replace('"', '');
        // remove last letter from url
        this.url = this.url.slice(0, -1);
       
        
      }
    })

    

  }
   convertStringToHtml(html: string) {
    
  }

  ngOnInit(): void {
  //  if(this.iD !== "" || this.iD !== undefined) {
    
  //  }
  }

}
