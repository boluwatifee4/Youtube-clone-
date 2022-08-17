import { Component, OnInit } from '@angular/core';
import { VideosServiceService } from 'src/app/core/services/videos/videos-service.service';
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

  getPublicVideos() {
    this.videosService.getPublicVideos().subscribe({
      next: (data: any) => {
        this.publicVideos = data?.data;
        console.log("videos",this.publicVideos);
      }
    })
  }


  ngOnInit(): void {
    this.getPublicVideos();
  }

}
