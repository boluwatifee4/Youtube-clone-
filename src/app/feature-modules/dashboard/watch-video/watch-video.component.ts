import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Endpoints } from 'src/app/core/coreUtils/endpoints';
import { VideosServiceService } from 'src/app/core/services/videos/videos-service.service';
import { VideoModel, CHANNELSMODEL } from 'src/app/shared/models/video.model';
import { DomSanitizer } from '@angular/platform-browser';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CommentsServiceService } from 'src/app/core/services/comments/comments-service.service';
import { GetComments } from 'src/app/shared/models/comments.nodel';
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
  urlRegex = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
  url!: string;
  commentS: any = [];
  q: string = "";
  relatedVids: any = [];
  emptyState: boolean = false;
  constructor(
    private videosService: VideosServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private commentsService: CommentsServiceService
  ) {
    this.route.params.subscribe(params => this.iD = params['id']);
    this.videoInterface = {
      id: this.iD,
      part: 'snippet,contentDetails,statistics,player,contentDetails'
    }

    this.commentsInterface= {
      part: 'snippet,id',
     id: this.iD,
    }
  }


  videoInterface: VideoModel = {
    id: this.iD,
    part: 'snippet,contentDetails,statistics,player,contentDetails'
  }
  commentsInterface: GetComments = {
    part: 'snippet,id',
   id: this.iD,
  }
  
  VideoInterface: CHANNELSMODEL = {
    part: 'snippet',
    key: Endpoints.API_KEY
  }
 
  ngAfterViewInit() {
    // console.log("video", this.iD);

    this.videosService.getSingleVideo(this.videoInterface).subscribe({
      next: (data: any) => {
        this.videos = data?.items;
        console.log("single video", this.videos);
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
        if(this.videos[0].snippet.tags !== undefined){
        this.q = this.videos[0]?.snippet?.tags[0] + " | " + this.videos[0]?.snippet?.tags[1];
        // console.log("q", this.q);
        getRelatedVideos(this.q);
        this.emptyState = false;
        }else{
          this.emptyState = true;
        }


      }
    })

    const getRelatedVideos = (q:any) => {
      this.videosService.getPublicVideos(this.VideoInterface, q).subscribe({
        next: (data: any) => {
          this.relatedVids = data?.items;
          if(this.relatedVids?.length > 0){
            this.emptyState = false;
          } else {
            this.emptyState = true;
          }
          console.log("related videos", this.relatedVids);
        }
      })
    }

    // get comments
    // this.commentsService.getComments(this.commentsInterface).subscribe({
    //   next: (data: any) => {
    //     console.log("comments", data);
    //     this.commentS = data?.items;
    //   }
    // })
  }


  viewVideo(id: any) {
    console.log("video",id);
    this.router.navigateByUrl(`/dashboard/gallery/${id}`);
    // refresh page after 2secs
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  ngOnInit(): void {

  }

}
