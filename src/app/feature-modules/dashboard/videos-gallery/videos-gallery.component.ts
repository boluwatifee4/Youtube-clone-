import { Component, OnInit } from '@angular/core';
import { VideosServiceService } from 'src/app/core/services/videos/videos-service.service';
import { CHANNELSMODEL, VideoModel } from 'src/app/shared/models/video.model';
import { Endpoints } from 'src/app/core/coreUtils/endpoints';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-videos-gallery',
  templateUrl: './videos-gallery.component.html',
  styleUrls: ['./videos-gallery.component.scss']
})
export class VideosGalleryComponent implements OnInit {

  publicVideos : any = [];
  constructor(
    private videosService: VideosServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  q: string = "ngHouston";
   channels: CHANNELSMODEL = {
    part: 'snippet',
    // forUserName: 'BradTraversy',
    key: Endpoints.API_KEY
  }

  video: VideoModel = {
    id: 'lcSdR0GKbmI',
    part: 'snippet,contentDetails,statistics,player'
  }
  getPublicVideos() {
    this.videosService.getPublicVideos(this.channels, this.q).subscribe({
      next: (data: any) => {
        this.publicVideos = data?.items;
        console.log("videos",this.publicVideos);
      }
    })
  }

  getSingleVideo() {
    this.videosService.getSingleVideo(this.video).subscribe({
      next: (data: any) => {
        console.log("single video",data);
      }
    })
  }

 viewVideo(id: any) {
    console.log("video",id);
    this.router.navigateByUrl(`/dashboard/gallery/${id}`);
  }
  ngOnInit(): void {
    this.getPublicVideos();
    this.getSingleVideo();
  }

}
