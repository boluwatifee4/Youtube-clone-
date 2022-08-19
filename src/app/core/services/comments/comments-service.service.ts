import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Endpoints } from '../../coreUtils/endpoints';
import { GetComments } from 'src/app/shared/models/comments.nodel';
@Injectable({
  providedIn: 'root'
})
export class CommentsServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getComments(comments: GetComments): Observable<any> {
    return this.http.get(`${Endpoints.COMMENTS}`,{
      params: {
        part: comments.part,
        id: comments.id,
        key: Endpoints.API_KEY
      }
    } );
  }
}

// Language: typescript
// Path: src\app\core\services\comments\comments-service.service.ts



