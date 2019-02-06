import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ListVideos} from "../model/ListVideos";

@Injectable()
export class YoutubeApiService {

  constructor(private httpClient: HttpClient) { }

  retrieve(part: string, maxResults: number, q: string): Observable<ListVideos> {
    return this.httpClient
      .get(`https://www.googleapis.com/youtube/v3/search?part=${part}&maxResults=${maxResults}&q=${q}&key=AIzaSyCav3lw9GO02t9kWWpVZJjYgHV94P5xTwU`)
      .pipe(map((listVideos: ListVideos) => {
        return listVideos;
      }));
  }
}
