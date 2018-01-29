import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class PixalsearchService {

  constructor(private http: HttpClient) {  }

  isSearching = new Subject<boolean>();


  photosSearch(term) {
    const params = new HttpParams({
      fromObject: {
        key: '7829095-d7e739eff9020f25ae222c075',
        image_type: 'photo',
        q: term,
      }
    });
    return this.http.get('https://pixabay.com/api/', {params});
  }

  getSinglePhoto(id) {
    const params = new HttpParams({
      fromObject: {
        key: '7829095-d7e739eff9020f25ae222c075',
        image_type: 'photo',
        id: id
      }
    });
    return this.http.get('https://pixabay.com/api/', {params});
  }

}
