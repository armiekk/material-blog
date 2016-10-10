import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialBlogRoutingModule } from './app-routing.module';

import { BlogPageModule } from './blog-page/blog-page.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BlogPageModule,
    MaterialBlogRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
