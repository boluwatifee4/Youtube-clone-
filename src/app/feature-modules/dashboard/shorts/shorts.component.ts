import { Component, OnInit } from '@angular/core';
import { VideosServiceService } from 'src/app/core/services/videos/videos-service.service';
import { recentsModel } from 'src/app/shared/models/subscriptions.model';
import { SubscriptionsServiceService } from 'src/app/core/services/subscriptions/subscriptions-service.service';
import { CHANNELSMODEL, VideoModel } from 'src/app/shared/models/video.model';
import { Endpoints } from 'src/app/core/coreUtils/endpoints';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.scss']
})
export class ShortsComponent implements OnInit {
  publicVideos : any = [];
  emptyState: boolean = false;
  constructor(
    private videosService: VideosServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private subscriptionsService: SubscriptionsServiceService,
  ) { }

  q: string = "shorts";
   channels: CHANNELSMODEL = {
    part: 'snippet',
    // forUserName: 'BradTraversy',
    key: Endpoints.API_KEY
  }
  getPublicVideos(q: any) {
    this.videosService.getPublicVideos(this.channels, q).subscribe({
      next: (data: any) => {
        this.publicVideos = data?.items;
        // console.log("videos",this.publicVideos);
      }
    })
  }

  
  viewVideo(id: any, channelTitle: string, description: string, thumbnailUrl: string) {
    console.log("video",id);
    let recents: recentsModel = {
      videoId: id,
      channelTitle: channelTitle,
      description: description,
      thumbnailUrl: thumbnailUrl
    }
    this.subscriptionsService.saveRecents(recents);
    this.router.navigateByUrl(`/dashboard/gallery/${id}`);
  }


  ngOnInit(): void {
    this.getPublicVideos(this.q);

  }

}
