import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentCardComponent } from './content-card/content-card.component';

import { BlogPageRoutingModule } from './blog-page-routing.module';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { AngularFireModule } from 'angularfire2';

// services
import { BlogContentService } from '../services/blog-content';

//firebase config
export const firebaseConfig = {
  apiKey: 'AIzaSyAi7yVvVFoPKT__u8hXD-dBXRy4rp96ilg',
  authDomain: 'localhost',
  // authDomain: 'arms-blog.firebaseapp.com', for production
  databaseURL: 'https://arms-blog.firebaseio.com/',
  storageBucket: 'gs://arms-blog.appspot.com'
};

@NgModule({
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    InfiniteScrollModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    BlogPageComponent, 
    BlogComponent, 
    AboutComponent, 
    ContactComponent, 
    NotFoundComponent, 
    ContentListComponent, 
    ContentDetailComponent, 
    ContentCardComponent],
  providers: [BlogContentService]
})
export class BlogPageModule { }
