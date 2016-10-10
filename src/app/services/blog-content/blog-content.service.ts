import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Content } from '../../models/content';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BlogContentService {


  constructor(private http: Http, private af: AngularFire) { }
  

  getContentList(lastContentKey: string = null): FirebaseListObservable<Content[]> {
    return this.af.database.list('/content', {
      query: {
        orderByKey: true,
        limitToFirst: 5,
        startAt: lastContentKey ? lastContentKey : null
      }
    });
  }

  getContentByKey(key: string): FirebaseObjectObservable<Content> {
    return this.af.database.object(`/content/${key}`);
  }

}
