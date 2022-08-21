import { Component, OnInit, } from '@angular/core';
import { VideosServiceService } from 'src/app/core/services/videos/videos-service.service';
import { recentsModel } from 'src/app/shared/models/subscriptions.model';
import { SubscriptionsServiceService } from 'src/app/core/services/subscriptions/subscriptions-service.service';
import { CHANNELSMODEL, VideoModel } from 'src/app/shared/models/video.model';
import { Endpoints } from 'src/app/core/coreUtils/endpoints';
import { Router, ActivatedRoute } from '@angular/router';
import { CatrgorieserviceService } from 'src/app/core/services/categories/catrgorieservice.service';
@Component({
  selector: 'app-videos-gallery',
  templateUrl: './videos-gallery.component.html',
  styleUrls: ['./videos-gallery.component.scss']
})
export class VideosGalleryComponent implements OnInit {

  publicVideos : any = [];
  emptyState: boolean = false;
  getCategories() {
    this.categoriesService.getcurrentCategoryWithObservable().subscribe({
       next: (data: any) => {
        //  console.log("category",data);
         this.q = data;
         this.getPublicVideos(this.q);
       }
     })
   }
  constructor(
    private videosService: VideosServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private subscriptionsService: SubscriptionsServiceService,
    private categoriesService: CatrgorieserviceService
  ) { 
    this.getCategories();
  }
  q: string = "reviews | compilations ";
   channels: CHANNELSMODEL = {
    part: 'snippet',
    // forUserName: 'BradTraversy',
    key: Endpoints.API_KEY
  }

  video: VideoModel = {
    id: 'lcSdR0GKbmI',
    part: 'snippet,contentDetails,statistics,player'
  }
  getPublicVideos(q: any) {
    this.videosService.getPublicVideos(this.channels, q).subscribe({
      next: (data: any) => {
        this.publicVideos = data?.items;
        // console.log("videos",this.publicVideos);
      }
    })
  }

  // getSingleVideo() {
  //   this.videosService.getSingleVideo(this.video).subscribe({
  //     next: (data: any) => {
  //       console.log("single video",data);
  //     }
  //   })
  // }

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
    // this.getSingleVideo();
  }

}
