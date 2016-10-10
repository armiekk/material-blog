import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogContentService } from '../../services/blog-content';
import { Content } from '../../models/content';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  
  content: Content;

  constructor(
    private route: ActivatedRoute,
    private blogContentService: BlogContentService
    ) {
      this.content = new Content();
    }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let key = params['content'];
      this.blogContentService.getContentByKey(key)
            .map((content: Content) => content)
            .subscribe((res: Content) => this.content = res);
    });
  }

}
