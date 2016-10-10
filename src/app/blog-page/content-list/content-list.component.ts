import { Component, OnInit } from '@angular/core';
import { BlogContentService } from '../../services/blog-content';
import { Content } from '../../models/content';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  
  contentList: Content[] = [];
  lastContentIndex: number;

  constructor(private blogContentService: BlogContentService) { }

  ngOnInit() {
    this.blogContentService
      .getContentList()
      .subscribe((res: Content[]) => this.contentList = res);
  }

  onScrollDown(){
    if(this.lastContentIndex == this.contentList.length-1)  return;

    this.lastContentIndex = this.contentList.length-1;
    let contentKey: string = this.contentList[this.lastContentIndex].$key;
    this.blogContentService
      .getContentList(contentKey)
      .subscribe((res: Content[]) => {
        this.contentList.splice(this.lastContentIndex, 1, ...res);
      });
    
  }

  
  

}
