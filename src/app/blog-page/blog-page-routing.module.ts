import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPageComponent } from './blog-page.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: BlogPageComponent,
        children: [
            { path: '', redirectTo: '/blog', pathMatch: 'full' },
            { path: 'blog', component: BlogComponent },
            { path: 'blog/:content', component: ContentDetailComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: '**', component: NotFoundComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class BlogPageRoutingModule { }
