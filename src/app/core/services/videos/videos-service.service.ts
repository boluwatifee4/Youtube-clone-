import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Endpoints } from '../../coreUtils/endpoints';
import { CHANNELSMODEL, VideoModel } from '../../../shared/models/video.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    
  })
};
@Injectable({
  providedIn: 'root'
})
export class VideosServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getPublicVideos(channels: CHANNELSMODEL, q: string ): Observable<any> {
    return this.http.get(`${Endpoints.YOUTUBE_VIDEOS}`,{
      params: {
        part: channels.part,
        // forUsername: channels.forUserName,
        key: channels.key,
        q: q,
        maxResults: 40
      }
    } );
  }

  getSingleVideo(videos: VideoModel): Observable<any> {
    return this.http.get(`${Endpoints.VIDEO}`,{
      params: {
        part: videos.part,
        id: videos.id,
        key: Endpoints.API_KEY
      }
    } );
  }

  getCachedPublicVideos(){
    return JSON.parse(localStorage.getItem('cachedPublicVideos') || '[]')
  }
}

