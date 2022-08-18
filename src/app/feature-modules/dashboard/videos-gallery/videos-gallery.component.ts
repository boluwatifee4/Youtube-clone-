import { Component, OnInit } from '@angular/core';
import { VideosServiceService } from 'src/app/core/services/videos/videos-service.service';
import { CHANNELSMODEL } from 'src/app/shared/models/video.model';
import { Endpoints } from 'src/app/core/coreUtils/endpoints';
@Component({
  selector: 'app-videos-gallery',
  templateUrl: './videos-gallery.component.html',
  styleUrls: ['./videos-gallery.component.scss']
})
export class VideosGalleryComponent implements OnInit {

  publicVideos : any = [];
  constructor(
    private videosService: VideosServiceService
  ) { }
  q: string = "coding | comedy";
   channels: CHANNELSMODEL = {
    part: 'snippet',
    // forUserName: 'BradTraversy',
    key: Endpoints.API_KEY
  }
  getPublicVideos() {
    this.videosService.getPublicVideos(this.channels, this.q).subscribe({
      next: (data: any) => {
        this.publicVideos = data?.items;
        console.log("videos",this.publicVideos);
      }
    })
  }


  ngOnInit(): void {
    this.getPublicVideos();
  }

}
