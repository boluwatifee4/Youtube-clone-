import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Endpoints } from '../../coreUtils/endpoints';

@Injectable({
  providedIn: 'root'
})
export class VideosServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getPublicVideos(): Observable<any> {
    return this.http.get(`${Endpoints.VIDEOS}/public`);
  }
}
