import { Component, OnInit } from '@angular/core';
import { SubscriptionsServiceService } from 'src/app/core/services/subscriptions/subscriptions-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-videos-library',
  templateUrl: './videos-library.component.html',
  styleUrls: ['./videos-library.component.scss']
})
export class VideosLibraryComponent implements OnInit {

  constructor(
    private subscriptionsService: SubscriptionsServiceService,
    private router: Router
  ) { }

  recents: any = [];
  setJustifyContentAround: boolean = false;

  getRecents() {
    this.recents = this.subscriptionsService.viewRecents();
    console.log("recents",this.recents.length);
    if(this.recents.length > 4) {
      this.setJustifyContentAround = true;
    }
  }
  viewVideo(id: any) {
    console.log("video",id);
    this.router.navigateByUrl(`/dashboard/gallery/${id}`);
  }

  ngOnInit(): void {
    this.getRecents();
  }

}
